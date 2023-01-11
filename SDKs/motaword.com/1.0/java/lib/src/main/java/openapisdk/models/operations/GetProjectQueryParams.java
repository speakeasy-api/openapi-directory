package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=with[]")
    public GetProjectWithEnum[] with;
    public GetProjectQueryParams withWith(GetProjectWithEnum[] with) {
        this.with = with;
        return this;
    }
}