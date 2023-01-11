package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveABlockPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public RetrieveABlockPathParams withId(String id) {
        this.id = id;
        return this;
    }
}