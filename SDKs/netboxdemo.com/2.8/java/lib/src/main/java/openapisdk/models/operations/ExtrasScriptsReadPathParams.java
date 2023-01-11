package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasScriptsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ExtrasScriptsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}