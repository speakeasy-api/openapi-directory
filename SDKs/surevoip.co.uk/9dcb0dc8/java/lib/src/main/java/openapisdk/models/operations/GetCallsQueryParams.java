package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCallsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=validate")
    public Long validate;
    public GetCallsQueryParams withValidate(Long validate) {
        this.validate = validate;
        return this;
    }
}