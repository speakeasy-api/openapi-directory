package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudFunctionsV2betaStateMessage
 * Informational messages about the state of the Cloud Function or Operation.
**/
public class GoogleCloudFunctionsV2betaStateMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GoogleCloudFunctionsV2betaStateMessage withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public GoogleCloudFunctionsV2betaStateMessageSeverityEnum severity;
    public GoogleCloudFunctionsV2betaStateMessage withSeverity(GoogleCloudFunctionsV2betaStateMessageSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GoogleCloudFunctionsV2betaStateMessage withType(String type) {
        this.type = type;
        return this;
    }
}