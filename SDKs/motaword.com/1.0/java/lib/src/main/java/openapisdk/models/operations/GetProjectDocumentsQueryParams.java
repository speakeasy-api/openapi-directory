package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectDocumentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=with[]")
    public GetProjectDocumentsWithEnum[] with;
    public GetProjectDocumentsQueryParams withWith(GetProjectDocumentsWithEnum[] with) {
        this.with = with;
        return this;
    }
}