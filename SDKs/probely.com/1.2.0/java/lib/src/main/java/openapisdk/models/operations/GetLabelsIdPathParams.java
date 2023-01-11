package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLabelsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetLabelsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}