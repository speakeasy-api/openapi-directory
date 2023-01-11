package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiTextLoremIpsumQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=loremType")
    public openapisdk.models.shared.LoremTypeEnum loremType;
    public GetApiTextLoremIpsumQueryParams withLoremType(openapisdk.models.shared.LoremTypeEnum loremType) {
        this.loremType = loremType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public Integer number;
    public GetApiTextLoremIpsumQueryParams withNumber(Integer number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public openapisdk.models.shared.TextTypeEnum type;
    public GetApiTextLoremIpsumQueryParams withType(openapisdk.models.shared.TextTypeEnum type) {
        this.type = type;
        return this;
    }
}