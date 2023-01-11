package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIntersectionsIntersectionIdOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=intersectionID")
    public String intersectionID;
    public GetIntersectionsIntersectionIdOutputFormatPathParams withIntersectionId(String intersectionID) {
        this.intersectionID = intersectionID;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum outputFormat;
    public GetIntersectionsIntersectionIdOutputFormatPathParams withOutputFormat(GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}