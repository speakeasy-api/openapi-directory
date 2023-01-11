package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeoplePeopleConnectionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceName")
    public String resourceName;
    public PeoplePeopleConnectionsListPathParams withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}