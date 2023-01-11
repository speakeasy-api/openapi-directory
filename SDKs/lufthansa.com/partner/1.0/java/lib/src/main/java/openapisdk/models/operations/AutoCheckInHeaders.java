package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AutoCheckInHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public AutoCheckInHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}