package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ErrorUnauthorized {
    @JsonProperty("error_title")
    public String errorTitle;
    public ErrorUnauthorized withErrorTitle(String errorTitle) {
        this.errorTitle = errorTitle;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ErrorUnauthorized withType(String type) {
        this.type = type;
        return this;
    }
}