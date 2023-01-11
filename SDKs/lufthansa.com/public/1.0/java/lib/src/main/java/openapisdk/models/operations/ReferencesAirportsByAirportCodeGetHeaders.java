package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReferencesAirportsByAirportCodeGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public ReferencesAirportsByAirportCodeGetHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}