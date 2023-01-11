package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ext")
    public openapisdk.models.shared.ExtEnum ext;
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams withExt(openapisdk.models.shared.ExtEnum ext) {
        this.ext = ext;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=heading")
    public Float heading;
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams withHeading(Float heading) {
        this.heading = heading;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=position")
    public String position;
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams withPosition(String position) {
        this.position = position;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionNumber")
    public Long versionNumber;
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}