package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionId")
    public String versionId;
    public UpdateVersionPathParams withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}