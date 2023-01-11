package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}