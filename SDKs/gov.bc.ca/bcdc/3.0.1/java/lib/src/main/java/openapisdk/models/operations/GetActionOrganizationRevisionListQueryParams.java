package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActionOrganizationRevisionListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetActionOrganizationRevisionListQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}