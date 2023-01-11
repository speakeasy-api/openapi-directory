package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1alphaPageInfo
 * Detailed page information.
**/
public class GoogleCloudDiscoveryengineV1alphaPageInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageCategory")
    public String pageCategory;
    public GoogleCloudDiscoveryengineV1alphaPageInfo withPageCategory(String pageCategory) {
        this.pageCategory = pageCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageviewId")
    public String pageviewId;
    public GoogleCloudDiscoveryengineV1alphaPageInfo withPageviewId(String pageviewId) {
        this.pageviewId = pageviewId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referrerUri")
    public String referrerUri;
    public GoogleCloudDiscoveryengineV1alphaPageInfo withReferrerUri(String referrerUri) {
        this.referrerUri = referrerUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public GoogleCloudDiscoveryengineV1alphaPageInfo withUri(String uri) {
        this.uri = uri;
        return this;
    }
}