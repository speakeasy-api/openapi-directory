package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdWordsAccount
 * JSON template for an Google Ads account.
**/
public class AdWordsAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoTaggingEnabled")
    public Boolean autoTaggingEnabled;
    public AdWordsAccount withAutoTaggingEnabled(Boolean autoTaggingEnabled) {
        this.autoTaggingEnabled = autoTaggingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public AdWordsAccount withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AdWordsAccount withKind(String kind) {
        this.kind = kind;
        return this;
    }
}