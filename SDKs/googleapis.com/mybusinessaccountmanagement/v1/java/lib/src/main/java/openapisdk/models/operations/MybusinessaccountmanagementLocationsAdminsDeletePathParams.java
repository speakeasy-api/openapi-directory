package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessaccountmanagementLocationsAdminsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessaccountmanagementLocationsAdminsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}