package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReferencesAircraftByAircraftCodeGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public ReferencesAircraftByAircraftCodeGetHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}