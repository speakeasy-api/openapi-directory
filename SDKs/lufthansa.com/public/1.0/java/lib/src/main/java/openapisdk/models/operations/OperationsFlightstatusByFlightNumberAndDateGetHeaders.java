package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OperationsFlightstatusByFlightNumberAndDateGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public OperationsFlightstatusByFlightNumberAndDateGetHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}