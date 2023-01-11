package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsViewsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ContactcenterinsightsProjectsLocationsViewsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}