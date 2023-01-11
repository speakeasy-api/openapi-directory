package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ErrorUnsupportedProduct
 * Unsupported Product
**/
public class ErrorUnsupportedProduct {
    @JsonProperty("detail")
    public String detail;
    public ErrorUnsupportedProduct withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ErrorUnsupportedProduct withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ErrorUnsupportedProduct withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ErrorUnsupportedProduct withType(String type) {
        this.type = type;
        return this;
    }
}