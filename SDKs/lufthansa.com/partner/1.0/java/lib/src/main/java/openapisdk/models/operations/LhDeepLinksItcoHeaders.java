package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LhDeepLinksItcoHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public LhDeepLinksItcoHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}