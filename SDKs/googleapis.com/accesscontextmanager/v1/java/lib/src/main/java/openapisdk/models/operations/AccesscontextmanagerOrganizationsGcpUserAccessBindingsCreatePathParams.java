package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}