package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsGetInstallationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=installation_id")
    public Long installationId;
    public AppsGetInstallationPathParams withInstallationId(Long installationId) {
        this.installationId = installationId;
        return this;
    }
}