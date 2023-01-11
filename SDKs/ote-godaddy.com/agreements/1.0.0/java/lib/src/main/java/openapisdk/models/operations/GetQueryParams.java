package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=keys")
    public String[] keys;
    public GetQueryParams withKeys(String[] keys) {
        this.keys = keys;
        return this;
    }
}