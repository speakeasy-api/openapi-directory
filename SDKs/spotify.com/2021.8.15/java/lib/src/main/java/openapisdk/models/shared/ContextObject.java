package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContextObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-contextobject - Find more info on the official Spotify Web API Reference
**/
public class ContextObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_urls")
    public ExternalUrlObject externalUrls;
    public ContextObject withExternalUrls(ExternalUrlObject externalUrls) {
        this.externalUrls = externalUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public ContextObject withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ContextObject withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ContextObject withUri(String uri) {
        this.uri = uri;
        return this;
    }
}