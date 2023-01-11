package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspaceIdMembersMemberIdNotesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public String page;
    public GetWorkspaceIdMembersMemberIdNotesQueryParams withPage(String page) {
        this.page = page;
        return this;
    }
}