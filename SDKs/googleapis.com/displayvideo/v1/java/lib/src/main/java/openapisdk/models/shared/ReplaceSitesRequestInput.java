package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplaceSitesRequestInput
 * Request message for SiteService.ReplaceSites.
**/
public class ReplaceSitesRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public ReplaceSitesRequestInput withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newSites")
    public SiteInput[] newSites;
    public ReplaceSitesRequestInput withNewSites(SiteInput[] newSites) {
        this.newSites = newSites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerId")
    public String partnerId;
    public ReplaceSitesRequestInput withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
}