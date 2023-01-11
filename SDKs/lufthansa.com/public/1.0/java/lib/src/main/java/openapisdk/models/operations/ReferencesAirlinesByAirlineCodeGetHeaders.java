package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReferencesAirlinesByAirlineCodeGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public ReferencesAirlinesByAirlineCodeGetHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}