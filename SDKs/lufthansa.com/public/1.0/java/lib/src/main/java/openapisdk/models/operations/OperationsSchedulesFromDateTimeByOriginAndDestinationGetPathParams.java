package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=destination")
    public String destination;
    public OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fromDateTime")
    public String fromDateTime;
    public OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams withFromDateTime(String fromDateTime) {
        this.fromDateTime = fromDateTime;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=origin")
    public String origin;
    public OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
}