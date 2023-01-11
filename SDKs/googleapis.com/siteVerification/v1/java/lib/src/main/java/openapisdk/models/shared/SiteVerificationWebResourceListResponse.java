package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SiteVerificationWebResourceListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public SiteVerificationWebResourceResource[] items;
    public SiteVerificationWebResourceListResponse withItems(SiteVerificationWebResourceResource[] items) {
        this.items = items;
        return this;
    }
}