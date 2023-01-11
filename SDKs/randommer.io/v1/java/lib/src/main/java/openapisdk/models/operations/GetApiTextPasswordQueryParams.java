package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiTextPasswordQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hasDigits")
    public Boolean hasDigits;
    public GetApiTextPasswordQueryParams withHasDigits(Boolean hasDigits) {
        this.hasDigits = hasDigits;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hasSpecial")
    public Boolean hasSpecial;
    public GetApiTextPasswordQueryParams withHasSpecial(Boolean hasSpecial) {
        this.hasSpecial = hasSpecial;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hasUppercase")
    public Boolean hasUppercase;
    public GetApiTextPasswordQueryParams withHasUppercase(Boolean hasUppercase) {
        this.hasUppercase = hasUppercase;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public Integer length;
    public GetApiTextPasswordQueryParams withLength(Integer length) {
        this.length = length;
        return this;
    }
}