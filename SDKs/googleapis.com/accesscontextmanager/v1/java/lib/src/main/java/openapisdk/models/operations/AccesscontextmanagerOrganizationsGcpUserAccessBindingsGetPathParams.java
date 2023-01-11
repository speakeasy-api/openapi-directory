package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}