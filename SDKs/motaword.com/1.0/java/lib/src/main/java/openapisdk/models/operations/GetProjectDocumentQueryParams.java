package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectDocumentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=with[]")
    public GetProjectDocumentWithEnum[] with;
    public GetProjectDocumentQueryParams withWith(GetProjectDocumentWithEnum[] with) {
        this.with = with;
        return this;
    }
}