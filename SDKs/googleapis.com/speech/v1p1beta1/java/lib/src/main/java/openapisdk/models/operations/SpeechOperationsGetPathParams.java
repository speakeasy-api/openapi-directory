package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SpeechOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SpeechOperationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}