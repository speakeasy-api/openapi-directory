package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud
 * Remediation instructions to resolve violation via gcloud cli
**/
public class GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalLinks")
    public String[] additionalLinks;
    public GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud withAdditionalLinks(String[] additionalLinks) {
        this.additionalLinks = additionalLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcloudCommands")
    public String[] gcloudCommands;
    public GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud withGcloudCommands(String[] gcloudCommands) {
        this.gcloudCommands = gcloudCommands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public String[] steps;
    public GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud withSteps(String[] steps) {
        this.steps = steps;
        return this;
    }
}