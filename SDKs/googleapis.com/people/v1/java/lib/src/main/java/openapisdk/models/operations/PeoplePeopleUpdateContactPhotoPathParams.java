package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeoplePeopleUpdateContactPhotoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceName")
    public String resourceName;
    public PeoplePeopleUpdateContactPhotoPathParams withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}