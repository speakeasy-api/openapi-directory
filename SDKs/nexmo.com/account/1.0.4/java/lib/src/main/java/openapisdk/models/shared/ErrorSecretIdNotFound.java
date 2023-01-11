package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ErrorSecretIdNotFound
 * This secret ID was not recognised
**/
public class ErrorSecretIdNotFound {
    @JsonProperty("detail")
    public String detail;
    public ErrorSecretIdNotFound withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ErrorSecretIdNotFound withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ErrorSecretIdNotFound withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ErrorSecretIdNotFound withType(String type) {
        this.type = type;
        return this;
    }
}