package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindUserByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public FindUserByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}