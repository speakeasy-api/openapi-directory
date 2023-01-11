package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeploymentCreateDeploymentRequest {
    @SpeakeasyMetadata("form:name=BuildSid")
    public String buildSid;
    public CreateDeploymentCreateDeploymentRequest withBuildSid(String buildSid) {
        this.buildSid = buildSid;
        return this;
    }
}