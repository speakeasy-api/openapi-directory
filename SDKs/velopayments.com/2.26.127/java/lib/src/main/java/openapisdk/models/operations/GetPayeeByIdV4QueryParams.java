package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayeeByIdV4QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sensitive")
    public Boolean sensitive;
    public GetPayeeByIdV4QueryParams withSensitive(Boolean sensitive) {
        this.sensitive = sensitive;
        return this;
    }
}