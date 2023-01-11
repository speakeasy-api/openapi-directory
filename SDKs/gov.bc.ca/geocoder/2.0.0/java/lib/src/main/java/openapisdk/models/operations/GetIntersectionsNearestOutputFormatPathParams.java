package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIntersectionsNearestOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetIntersectionsNearestOutputFormatOutputFormatEnum outputFormat;
    public GetIntersectionsNearestOutputFormatPathParams withOutputFormat(GetIntersectionsNearestOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}