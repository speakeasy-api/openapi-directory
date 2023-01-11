package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GlobalHook2Config {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_type")
    public String contentType;
    public GlobalHook2Config withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insecure_ssl")
    public String insecureSsl;
    public GlobalHook2Config withInsecureSsl(String insecureSsl) {
        this.insecureSsl = insecureSsl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GlobalHook2Config withUrl(String url) {
        this.url = url;
        return this;
    }
}