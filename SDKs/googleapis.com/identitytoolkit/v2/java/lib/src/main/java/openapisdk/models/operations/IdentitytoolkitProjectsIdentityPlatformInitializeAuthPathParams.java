package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsIdentityPlatformInitializeAuthPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public IdentitytoolkitProjectsIdentityPlatformInitializeAuthPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}