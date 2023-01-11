package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteClientValidatorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteClientValidatorPathParams withId(String id) {
        this.id = id;
        return this;
    }
}