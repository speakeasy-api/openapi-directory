package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasChoicesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ExtrasChoicesReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}