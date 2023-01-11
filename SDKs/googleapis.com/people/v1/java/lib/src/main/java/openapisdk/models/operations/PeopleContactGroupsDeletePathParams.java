package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeopleContactGroupsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceName")
    public String resourceName;
    public PeopleContactGroupsDeletePathParams withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}