package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactcenterinsightsProjectsLocationsViewsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ContactcenterinsightsProjectsLocationsViewsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}