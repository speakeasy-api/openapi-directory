package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole
 * Remediation instructions to resolve violation via cloud console
**/
public class GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalLinks")
    public String[] additionalLinks;
    public GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole withAdditionalLinks(String[] additionalLinks) {
        this.additionalLinks = additionalLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consoleUris")
    public String[] consoleUris;
    public GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole withConsoleUris(String[] consoleUris) {
        this.consoleUris = consoleUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public String[] steps;
    public GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole withSteps(String[] steps) {
        this.steps = steps;
        return this;
    }
}