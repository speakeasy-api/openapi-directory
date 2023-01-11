package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OndStatusHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public OndStatusHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}