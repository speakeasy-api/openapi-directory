package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=destination")
    public String destination;
    public OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=origin")
    public String origin;
    public OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
}