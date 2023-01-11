package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsViewsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ContactcenterinsightsProjectsLocationsViewsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}