package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ThirdPartyLinkListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public ThirdPartyLinkListResponse withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public ThirdPartyLink[] items;
    public ThirdPartyLinkListResponse withItems(ThirdPartyLink[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ThirdPartyLinkListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}