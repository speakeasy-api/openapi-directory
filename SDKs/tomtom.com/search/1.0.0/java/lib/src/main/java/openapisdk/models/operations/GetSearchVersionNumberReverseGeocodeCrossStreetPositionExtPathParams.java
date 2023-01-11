package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ext")
    public openapisdk.models.shared.ExtEnum ext;
    public GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtPathParams withExt(openapisdk.models.shared.ExtEnum ext) {
        this.ext = ext;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=position")
    public String position;
    public GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtPathParams withPosition(String position) {
        this.position = position;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionNumber")
    public Long versionNumber;
    public GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtPathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}