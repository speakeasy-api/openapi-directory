package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerOrganizationsGcpUserAccessBindingsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}