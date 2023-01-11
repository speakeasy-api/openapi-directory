package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_version")
    public WebhookApiVersionEnum apiVersion;
    public WebhookInput withApiVersion(WebhookApiVersionEnum apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("check_cert")
    public Boolean checkCert;
    public WebhookInput withCheckCert(Boolean checkCert) {
        this.checkCert = checkCert;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WebhookInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public WebhookInput withUrl(String url) {
        this.url = url;
        return this;
    }
}