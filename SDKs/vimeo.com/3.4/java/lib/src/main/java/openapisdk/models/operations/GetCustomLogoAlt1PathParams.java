package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomLogoAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=logo_id")
    public Double logoId;
    public GetCustomLogoAlt1PathParams withLogoId(Double logoId) {
        this.logoId = logoId;
        return this;
    }
}