package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BillingInfoList
 * A billing info feed lists Billing Info the Ad Exchange buyer account has access to. Each entry in the feed corresponds to a single billing info.
**/
public class BillingInfoList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public BillingInfo[] items;
    public BillingInfoList withItems(BillingInfo[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public BillingInfoList withKind(String kind) {
        this.kind = kind;
        return this;
    }
}