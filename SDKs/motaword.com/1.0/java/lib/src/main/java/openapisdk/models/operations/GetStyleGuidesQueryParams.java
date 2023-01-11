package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStyleGuidesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=with[]")
    public GetStyleGuidesWithEnum[] with;
    public GetStyleGuidesQueryParams withWith(GetStyleGuidesWithEnum[] with) {
        this.with = with;
        return this;
    }
}