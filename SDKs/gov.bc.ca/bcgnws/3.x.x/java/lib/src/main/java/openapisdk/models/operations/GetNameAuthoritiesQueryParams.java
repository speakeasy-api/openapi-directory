package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNameAuthoritiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputFormat")
    public GetNameAuthoritiesOutputFormatEnum outputFormat;
    public GetNameAuthoritiesQueryParams withOutputFormat(GetNameAuthoritiesOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}