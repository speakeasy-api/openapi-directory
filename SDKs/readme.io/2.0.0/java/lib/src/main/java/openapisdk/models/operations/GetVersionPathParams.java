package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionId")
    public String versionId;
    public GetVersionPathParams withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}