package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAdvertisersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertisers")
    public Advertiser[] advertisers;
    public ListAdvertisersResponse withAdvertisers(Advertiser[] advertisers) {
        this.advertisers = advertisers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAdvertisersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}