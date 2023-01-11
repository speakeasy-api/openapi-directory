package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchVoiceNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DestinationNumber")
    public String destinationNumber;
    public FetchVoiceNumberPathParams withDestinationNumber(String destinationNumber) {
        this.destinationNumber = destinationNumber;
        return this;
    }
}