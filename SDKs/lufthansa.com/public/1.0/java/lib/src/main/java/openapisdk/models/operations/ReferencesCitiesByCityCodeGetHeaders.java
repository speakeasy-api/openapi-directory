package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReferencesCitiesByCityCodeGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public ReferencesCitiesByCityCodeGetHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}