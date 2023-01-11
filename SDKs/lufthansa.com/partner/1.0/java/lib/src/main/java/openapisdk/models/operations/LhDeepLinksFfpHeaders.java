package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LhDeepLinksFfpHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public LhDeepLinksFfpHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}