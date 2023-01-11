package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1betaPageInfo
 * Detailed page information.
**/
public class GoogleCloudDiscoveryengineV1betaPageInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageCategory")
    public String pageCategory;
    public GoogleCloudDiscoveryengineV1betaPageInfo withPageCategory(String pageCategory) {
        this.pageCategory = pageCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageviewId")
    public String pageviewId;
    public GoogleCloudDiscoveryengineV1betaPageInfo withPageviewId(String pageviewId) {
        this.pageviewId = pageviewId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referrerUri")
    public String referrerUri;
    public GoogleCloudDiscoveryengineV1betaPageInfo withReferrerUri(String referrerUri) {
        this.referrerUri = referrerUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public GoogleCloudDiscoveryengineV1betaPageInfo withUri(String uri) {
        this.uri = uri;
        return this;
    }
}