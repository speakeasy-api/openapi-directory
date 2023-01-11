package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Get1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public Get1PathParams withId(String id) {
        this.id = id;
        return this;
    }
}