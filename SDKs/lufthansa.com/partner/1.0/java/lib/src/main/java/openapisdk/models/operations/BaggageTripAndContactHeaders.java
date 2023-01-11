package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaggageTripAndContactHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public BaggageTripAndContactHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}