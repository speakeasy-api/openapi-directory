package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions
 * Instructions to remediate violation
**/
public class GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consoleInstructions")
    public GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole consoleInstructions;
    public GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions withConsoleInstructions(GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole consoleInstructions) {
        this.consoleInstructions = consoleInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcloudInstructions")
    public GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud gcloudInstructions;
    public GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions withGcloudInstructions(GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud gcloudInstructions) {
        this.gcloudInstructions = gcloudInstructions;
        return this;
    }
}