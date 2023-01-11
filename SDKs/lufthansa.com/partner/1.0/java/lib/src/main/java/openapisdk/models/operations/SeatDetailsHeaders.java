package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SeatDetailsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public SeatDetailsHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}