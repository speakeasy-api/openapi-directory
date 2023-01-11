package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentDetailsV3QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sensitive")
    public Boolean sensitive;
    public GetPaymentDetailsV3QueryParams withSensitive(Boolean sensitive) {
        this.sensitive = sensitive;
        return this;
    }
}