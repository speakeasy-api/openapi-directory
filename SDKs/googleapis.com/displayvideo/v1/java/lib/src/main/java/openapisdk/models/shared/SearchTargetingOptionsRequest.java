package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchTargetingOptionsRequest
 * Request message for SearchTargetingOptions.
**/
public class SearchTargetingOptionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public SearchTargetingOptionsRequest withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessChainSearchTerms")
    public BusinessChainSearchTerms businessChainSearchTerms;
    public SearchTargetingOptionsRequest withBusinessChainSearchTerms(BusinessChainSearchTerms businessChainSearchTerms) {
        this.businessChainSearchTerms = businessChainSearchTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoRegionSearchTerms")
    public GeoRegionSearchTerms geoRegionSearchTerms;
    public SearchTargetingOptionsRequest withGeoRegionSearchTerms(GeoRegionSearchTerms geoRegionSearchTerms) {
        this.geoRegionSearchTerms = geoRegionSearchTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public SearchTargetingOptionsRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public SearchTargetingOptionsRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poiSearchTerms")
    public PoiSearchTerms poiSearchTerms;
    public SearchTargetingOptionsRequest withPoiSearchTerms(PoiSearchTerms poiSearchTerms) {
        this.poiSearchTerms = poiSearchTerms;
        return this;
    }
}