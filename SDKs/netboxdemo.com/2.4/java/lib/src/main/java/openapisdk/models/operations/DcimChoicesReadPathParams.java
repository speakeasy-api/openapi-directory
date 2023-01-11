package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimChoicesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DcimChoicesReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}