package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchVoiceNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Number")
    public String number;
    public FetchVoiceNumberPathParams withNumber(String number) {
        this.number = number;
        return this;
    }
}