package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamRolesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public IamRolesGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}