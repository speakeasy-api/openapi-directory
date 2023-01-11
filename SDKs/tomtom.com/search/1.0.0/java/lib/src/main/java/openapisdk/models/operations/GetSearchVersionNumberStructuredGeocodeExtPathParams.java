package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchVersionNumberStructuredGeocodeExtPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ext")
    public openapisdk.models.shared.ExtEnum ext;
    public GetSearchVersionNumberStructuredGeocodeExtPathParams withExt(openapisdk.models.shared.ExtEnum ext) {
        this.ext = ext;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionNumber")
    public Long versionNumber;
    public GetSearchVersionNumberStructuredGeocodeExtPathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}