package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchVoiceNumberQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OriginationNumber")
    public String originationNumber;
    public FetchVoiceNumberQueryParams withOriginationNumber(String originationNumber) {
        this.originationNumber = originationNumber;
        return this;
    }
}