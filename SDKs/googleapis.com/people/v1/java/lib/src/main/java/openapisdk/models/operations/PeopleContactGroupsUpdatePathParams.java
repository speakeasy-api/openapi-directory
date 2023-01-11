package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeopleContactGroupsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceName")
    public String resourceName;
    public PeopleContactGroupsUpdatePathParams withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}