package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsRolesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IamProjectsRolesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}