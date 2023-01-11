package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionId")
    public String versionId;
    public DeleteVersionPathParams withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}