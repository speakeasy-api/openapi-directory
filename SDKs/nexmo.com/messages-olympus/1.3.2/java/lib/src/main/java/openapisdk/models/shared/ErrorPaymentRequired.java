package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ErrorPaymentRequired {
    @JsonProperty("detail")
    public String detail;
    public ErrorPaymentRequired withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ErrorPaymentRequired withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ErrorPaymentRequired withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ErrorPaymentRequired withType(String type) {
        this.type = type;
        return this;
    }
}