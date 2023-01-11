package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIntersectionsWithinOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetIntersectionsWithinOutputFormatOutputFormatEnum outputFormat;
    public GetIntersectionsWithinOutputFormatPathParams withOutputFormat(GetIntersectionsWithinOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}