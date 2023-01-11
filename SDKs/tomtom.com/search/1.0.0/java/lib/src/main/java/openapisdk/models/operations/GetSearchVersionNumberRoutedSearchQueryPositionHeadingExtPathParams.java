package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ext")
    public openapisdk.models.shared.ExtEnum ext;
    public GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtPathParams withExt(openapisdk.models.shared.ExtEnum ext) {
        this.ext = ext;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=heading")
    public Float heading;
    public GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtPathParams withHeading(Float heading) {
        this.heading = heading;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=position")
    public String position;
    public GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtPathParams withPosition(String position) {
        this.position = position;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=query")
    public String query;
    public GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtPathParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionNumber")
    public Long versionNumber;
    public GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtPathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}