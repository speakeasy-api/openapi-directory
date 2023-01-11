package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AutoCheckInPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ticketnumber")
    public String ticketnumber;
    public AutoCheckInPathParams withTicketnumber(String ticketnumber) {
        this.ticketnumber = ticketnumber;
        return this;
    }
}