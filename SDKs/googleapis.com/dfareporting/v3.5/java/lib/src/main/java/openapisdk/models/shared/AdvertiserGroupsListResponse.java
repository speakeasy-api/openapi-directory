package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdvertiserGroupsListResponse
 * Advertiser Group List Response
**/
public class AdvertiserGroupsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserGroups")
    public AdvertiserGroup[] advertiserGroups;
    public AdvertiserGroupsListResponse withAdvertiserGroups(AdvertiserGroup[] advertiserGroups) {
        this.advertiserGroups = advertiserGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AdvertiserGroupsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public AdvertiserGroupsListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}