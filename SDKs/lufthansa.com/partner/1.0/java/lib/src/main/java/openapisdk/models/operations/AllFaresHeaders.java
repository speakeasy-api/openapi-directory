package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AllFaresHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public AllFaresHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}