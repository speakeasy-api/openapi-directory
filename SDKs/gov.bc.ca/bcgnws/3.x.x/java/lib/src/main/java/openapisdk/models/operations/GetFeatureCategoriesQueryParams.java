package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFeatureCategoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputFormat")
    public GetFeatureCategoriesOutputFormatEnum outputFormat;
    public GetFeatureCategoriesQueryParams withOutputFormat(GetFeatureCategoriesOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}