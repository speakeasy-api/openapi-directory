package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTicketInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ticketId")
    public String ticketId;
    public GetTicketInfoPathParams withTicketId(String ticketId) {
        this.ticketId = ticketId;
        return this;
    }
}