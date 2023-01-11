package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStyleGuideQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=with[]")
    public GetStyleGuideWithEnum[] with;
    public GetStyleGuideQueryParams withWith(GetStyleGuideWithEnum[] with) {
        this.with = with;
        return this;
    }
}