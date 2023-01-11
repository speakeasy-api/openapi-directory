package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActionOrganizationFollowerListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetActionOrganizationFollowerListQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}