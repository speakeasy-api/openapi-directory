package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJobByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetJobByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}