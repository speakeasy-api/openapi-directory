package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeoplePeopleGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceName")
    public String resourceName;
    public PeoplePeopleGetPathParams withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}