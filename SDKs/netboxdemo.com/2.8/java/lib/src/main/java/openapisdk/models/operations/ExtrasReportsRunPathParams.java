package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasReportsRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ExtrasReportsRunPathParams withId(String id) {
        this.id = id;
        return this;
    }
}