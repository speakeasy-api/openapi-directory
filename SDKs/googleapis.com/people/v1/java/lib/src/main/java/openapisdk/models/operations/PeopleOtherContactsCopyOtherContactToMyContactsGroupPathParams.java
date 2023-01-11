package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeopleOtherContactsCopyOtherContactToMyContactsGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceName")
    public String resourceName;
    public PeopleOtherContactsCopyOtherContactToMyContactsGroupPathParams withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}