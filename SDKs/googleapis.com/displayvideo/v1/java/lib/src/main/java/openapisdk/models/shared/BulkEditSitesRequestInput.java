package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkEditSitesRequestInput
 * Request message for SiteService.BulkEditSites.
**/
public class BulkEditSitesRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public BulkEditSitesRequestInput withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdSites")
    public SiteInput[] createdSites;
    public BulkEditSitesRequestInput withCreatedSites(SiteInput[] createdSites) {
        this.createdSites = createdSites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletedSites")
    public String[] deletedSites;
    public BulkEditSitesRequestInput withDeletedSites(String[] deletedSites) {
        this.deletedSites = deletedSites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerId")
    public String partnerId;
    public BulkEditSitesRequestInput withPartnerId(String partnerId) {
        this.partnerId = partnerId;
        return this;
    }
}