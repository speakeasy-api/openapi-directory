package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OffersLoungesByLocationGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public OffersLoungesByLocationGetHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}