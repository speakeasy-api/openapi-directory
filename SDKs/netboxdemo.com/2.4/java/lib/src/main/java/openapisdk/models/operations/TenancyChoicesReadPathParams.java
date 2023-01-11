package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TenancyChoicesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public TenancyChoicesReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}