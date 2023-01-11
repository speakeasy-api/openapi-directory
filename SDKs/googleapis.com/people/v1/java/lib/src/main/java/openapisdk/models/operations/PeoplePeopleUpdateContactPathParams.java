package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeoplePeopleUpdateContactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceName")
    public String resourceName;
    public PeoplePeopleUpdateContactPathParams withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}