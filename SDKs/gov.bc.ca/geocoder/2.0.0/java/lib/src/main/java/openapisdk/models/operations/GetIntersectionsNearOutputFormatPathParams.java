package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIntersectionsNearOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetIntersectionsNearOutputFormatOutputFormatEnum outputFormat;
    public GetIntersectionsNearOutputFormatPathParams withOutputFormat(GetIntersectionsNearOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}