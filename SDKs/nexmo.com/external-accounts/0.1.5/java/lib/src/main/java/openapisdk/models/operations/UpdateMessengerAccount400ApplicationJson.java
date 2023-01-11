package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMessengerAccount400ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public UpdateMessengerAccount400ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public String instance;
    public UpdateMessengerAccount400ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalid_params")
    public UpdateMessengerAccount400ApplicationJsonInvalidParams[] invalidParams;
    public UpdateMessengerAccount400ApplicationJson withInvalidParams(UpdateMessengerAccount400ApplicationJsonInvalidParams[] invalidParams) {
        this.invalidParams = invalidParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public UpdateMessengerAccount400ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdateMessengerAccount400ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}