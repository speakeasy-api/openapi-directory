package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasReportsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ExtrasReportsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}