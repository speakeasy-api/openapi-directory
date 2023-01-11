package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BestFaresHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public BestFaresHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}