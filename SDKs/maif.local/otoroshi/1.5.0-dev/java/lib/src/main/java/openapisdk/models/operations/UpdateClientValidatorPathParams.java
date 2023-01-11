package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateClientValidatorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateClientValidatorPathParams withId(String id) {
        this.id = id;
        return this;
    }
}