package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchVersionNumberGeocodeQueryExtPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ext")
    public openapisdk.models.shared.ExtEnum ext;
    public GetSearchVersionNumberGeocodeQueryExtPathParams withExt(openapisdk.models.shared.ExtEnum ext) {
        this.ext = ext;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=query")
    public String query;
    public GetSearchVersionNumberGeocodeQueryExtPathParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionNumber")
    public Long versionNumber;
    public GetSearchVersionNumberGeocodeQueryExtPathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}