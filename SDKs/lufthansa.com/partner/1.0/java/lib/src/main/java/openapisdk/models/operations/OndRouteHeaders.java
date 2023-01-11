package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OndRouteHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public OndRouteHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}