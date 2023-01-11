package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayeeByIdV3QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sensitive")
    public Boolean sensitive;
    public GetPayeeByIdV3QueryParams withSensitive(Boolean sensitive) {
        this.sensitive = sensitive;
        return this;
    }
}