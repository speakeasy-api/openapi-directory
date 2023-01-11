package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TexttospeechOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public TexttospeechOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}