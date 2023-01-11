package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProgressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public GetProgressQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}