package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretmanagerProjectsLocationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SecretmanagerProjectsLocationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}