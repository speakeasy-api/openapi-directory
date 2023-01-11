package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLocationRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateLocationRulePathParams withId(String id) {
        this.id = id;
        return this;
    }
}