package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessaccountmanagementLocationsAdminsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessaccountmanagementLocationsAdminsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}