package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindClientValidatorByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public FindClientValidatorByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}