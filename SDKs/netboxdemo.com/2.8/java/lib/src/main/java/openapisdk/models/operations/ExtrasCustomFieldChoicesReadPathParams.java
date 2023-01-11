package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasCustomFieldChoicesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ExtrasCustomFieldChoicesReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}