package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerOrganizationsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudresourcemanagerOrganizationsUpdatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}