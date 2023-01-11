package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ContactcenterinsightsProjectsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}