package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActionOrganizationListForUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=permission")
    public String permission;
    public GetActionOrganizationListForUserQueryParams withPermission(String permission) {
        this.permission = permission;
        return this;
    }
}