package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActionOrganizationFollowerCountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetActionOrganizationFollowerCountQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}