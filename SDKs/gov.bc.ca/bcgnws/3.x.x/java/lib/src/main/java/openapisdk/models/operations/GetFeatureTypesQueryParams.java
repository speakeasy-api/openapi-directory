package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFeatureTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputFormat")
    public GetFeatureTypesOutputFormatEnum outputFormat;
    public GetFeatureTypesQueryParams withOutputFormat(GetFeatureTypesOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}