package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJurisdictionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetJurisdictionFormatEnum format;
    public GetJurisdictionQueryParams withFormat(GetJurisdictionFormatEnum format) {
        this.format = format;
        return this;
    }
}