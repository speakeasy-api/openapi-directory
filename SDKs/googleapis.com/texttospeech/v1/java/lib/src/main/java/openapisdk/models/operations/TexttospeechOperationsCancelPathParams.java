package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TexttospeechOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public TexttospeechOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}