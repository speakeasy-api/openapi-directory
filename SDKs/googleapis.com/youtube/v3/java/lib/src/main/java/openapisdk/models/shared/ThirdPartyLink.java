package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThirdPartyLink
 * A *third party account link* resource represents a link between a YouTube account or a channel and an account on a third-party service.
**/
public class ThirdPartyLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public ThirdPartyLink withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ThirdPartyLink withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkingToken")
    public String linkingToken;
    public ThirdPartyLink withLinkingToken(String linkingToken) {
        this.linkingToken = linkingToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snippet")
    public ThirdPartyLinkSnippet snippet;
    public ThirdPartyLink withSnippet(ThirdPartyLinkSnippet snippet) {
        this.snippet = snippet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ThirdPartyLinkStatus status;
    public ThirdPartyLink withStatus(ThirdPartyLinkStatus status) {
        this.status = status;
        return this;
    }
}