package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=includes")
    public GetIncludesEnum[] includes;
    public GetQueryParams withIncludes(GetIncludesEnum[] includes) {
        this.includes = includes;
        return this;
    }
}