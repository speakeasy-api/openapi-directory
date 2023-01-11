package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeoplePeopleDeleteContactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceName")
    public String resourceName;
    public PeoplePeopleDeleteContactPathParams withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}