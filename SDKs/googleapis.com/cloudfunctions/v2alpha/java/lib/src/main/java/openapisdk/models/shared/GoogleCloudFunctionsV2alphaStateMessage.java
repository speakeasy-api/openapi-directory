package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudFunctionsV2alphaStateMessage
 * Informational messages about the state of the Cloud Function or Operation.
**/
public class GoogleCloudFunctionsV2alphaStateMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GoogleCloudFunctionsV2alphaStateMessage withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public GoogleCloudFunctionsV2alphaStateMessageSeverityEnum severity;
    public GoogleCloudFunctionsV2alphaStateMessage withSeverity(GoogleCloudFunctionsV2alphaStateMessageSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GoogleCloudFunctionsV2alphaStateMessage withType(String type) {
        this.type = type;
        return this;
    }
}