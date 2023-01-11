package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateForVoiceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public ValidateForVoiceQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public String number;
    public ValidateForVoiceQueryParams withNumber(String number) {
        this.number = number;
        return this;
    }
}