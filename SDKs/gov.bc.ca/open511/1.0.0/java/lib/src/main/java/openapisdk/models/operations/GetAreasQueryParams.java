package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAreasQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetAreasFormatEnum format;
    public GetAreasQueryParams withFormat(GetAreasFormatEnum format) {
        this.format = format;
        return this;
    }
}