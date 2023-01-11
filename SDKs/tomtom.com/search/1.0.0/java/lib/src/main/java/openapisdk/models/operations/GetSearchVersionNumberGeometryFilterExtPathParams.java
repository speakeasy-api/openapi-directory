package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchVersionNumberGeometryFilterExtPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ext")
    public openapisdk.models.shared.ExtEnum ext;
    public GetSearchVersionNumberGeometryFilterExtPathParams withExt(openapisdk.models.shared.ExtEnum ext) {
        this.ext = ext;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionNumber")
    public Long versionNumber;
    public GetSearchVersionNumberGeometryFilterExtPathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}