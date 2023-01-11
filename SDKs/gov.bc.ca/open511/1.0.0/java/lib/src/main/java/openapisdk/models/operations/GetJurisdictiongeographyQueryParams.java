package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJurisdictiongeographyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetJurisdictiongeographyFormatEnum format;
    public GetJurisdictiongeographyQueryParams withFormat(GetJurisdictiongeographyFormatEnum format) {
        this.format = format;
        return this;
    }
}