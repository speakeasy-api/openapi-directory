package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BillingProfilesListResponse
 * Billing profile List Response
**/
public class BillingProfilesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingProfiles")
    public BillingProfile[] billingProfiles;
    public BillingProfilesListResponse withBillingProfiles(BillingProfile[] billingProfiles) {
        this.billingProfiles = billingProfiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public BillingProfilesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public BillingProfilesListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}