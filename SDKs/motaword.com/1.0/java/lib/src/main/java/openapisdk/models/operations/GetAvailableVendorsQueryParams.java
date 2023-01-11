package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAvailableVendorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=with[]")
    public GetAvailableVendorsWithEnum[] with;
    public GetAvailableVendorsQueryParams withWith(GetAvailableVendorsWithEnum[] with) {
        this.with = with;
        return this;
    }
}