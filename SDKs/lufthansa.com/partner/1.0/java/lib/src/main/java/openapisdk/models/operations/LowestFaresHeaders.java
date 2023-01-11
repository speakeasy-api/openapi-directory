package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LowestFaresHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public LowestFaresHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}