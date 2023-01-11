package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchVersionNumberRoutedFilterPositionHeadingExtPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ext")
    public openapisdk.models.shared.ExtEnum ext;
    public GetSearchVersionNumberRoutedFilterPositionHeadingExtPathParams withExt(openapisdk.models.shared.ExtEnum ext) {
        this.ext = ext;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=heading")
    public Float heading;
    public GetSearchVersionNumberRoutedFilterPositionHeadingExtPathParams withHeading(Float heading) {
        this.heading = heading;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=position")
    public String position;
    public GetSearchVersionNumberRoutedFilterPositionHeadingExtPathParams withPosition(String position) {
        this.position = position;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionNumber")
    public Long versionNumber;
    public GetSearchVersionNumberRoutedFilterPositionHeadingExtPathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}