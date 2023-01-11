package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudFunctionsV2StateMessage
 * Informational messages about the state of the Cloud Function or Operation.
**/
public class GoogleCloudFunctionsV2StateMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GoogleCloudFunctionsV2StateMessage withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public GoogleCloudFunctionsV2StateMessageSeverityEnum severity;
    public GoogleCloudFunctionsV2StateMessage withSeverity(GoogleCloudFunctionsV2StateMessageSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GoogleCloudFunctionsV2StateMessage withType(String type) {
        this.type = type;
        return this;
    }
}