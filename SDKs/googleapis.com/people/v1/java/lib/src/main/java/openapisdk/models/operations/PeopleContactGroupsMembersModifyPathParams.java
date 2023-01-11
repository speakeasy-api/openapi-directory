package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeopleContactGroupsMembersModifyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceName")
    public String resourceName;
    public PeopleContactGroupsMembersModifyPathParams withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}