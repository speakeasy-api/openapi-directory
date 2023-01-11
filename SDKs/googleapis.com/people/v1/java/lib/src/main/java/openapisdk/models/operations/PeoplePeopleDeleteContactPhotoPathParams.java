package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeoplePeopleDeleteContactPhotoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceName")
    public String resourceName;
    public PeoplePeopleDeleteContactPhotoPathParams withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}