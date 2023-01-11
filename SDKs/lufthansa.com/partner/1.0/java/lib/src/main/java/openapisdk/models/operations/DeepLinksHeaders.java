package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeepLinksHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public DeepLinksHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}