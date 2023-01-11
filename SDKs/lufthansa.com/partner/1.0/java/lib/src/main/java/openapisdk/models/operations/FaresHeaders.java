package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FaresHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public FaresHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}