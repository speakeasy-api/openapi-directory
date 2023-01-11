package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetManifestByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=manifest_id")
    public String manifestId;
    public GetManifestByIdPathParams withManifestId(String manifestId) {
        this.manifestId = manifestId;
        return this;
    }
}