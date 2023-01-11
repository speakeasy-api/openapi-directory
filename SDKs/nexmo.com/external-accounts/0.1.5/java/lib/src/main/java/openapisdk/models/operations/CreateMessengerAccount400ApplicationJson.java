package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMessengerAccount400ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public CreateMessengerAccount400ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public String instance;
    public CreateMessengerAccount400ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalid_params")
    public CreateMessengerAccount400ApplicationJsonInvalidParams[] invalidParams;
    public CreateMessengerAccount400ApplicationJson withInvalidParams(CreateMessengerAccount400ApplicationJsonInvalidParams[] invalidParams) {
        this.invalidParams = invalidParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public CreateMessengerAccount400ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public CreateMessengerAccount400ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}