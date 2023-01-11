package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdvertisersListResponse
 * Advertiser List Response
**/
public class AdvertisersListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertisers")
    public Advertiser[] advertisers;
    public AdvertisersListResponse withAdvertisers(Advertiser[] advertisers) {
        this.advertisers = advertisers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AdvertisersListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public AdvertisersListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}