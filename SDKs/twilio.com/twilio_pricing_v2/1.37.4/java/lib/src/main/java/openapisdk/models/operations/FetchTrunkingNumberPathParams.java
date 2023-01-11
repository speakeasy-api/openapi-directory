package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchTrunkingNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DestinationNumber")
    public String destinationNumber;
    public FetchTrunkingNumberPathParams withDestinationNumber(String destinationNumber) {
        this.destinationNumber = destinationNumber;
        return this;
    }
}