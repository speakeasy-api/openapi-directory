package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFeatureClassesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputFormat")
    public GetFeatureClassesOutputFormatEnum outputFormat;
    public GetFeatureClassesQueryParams withOutputFormat(GetFeatureClassesOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}