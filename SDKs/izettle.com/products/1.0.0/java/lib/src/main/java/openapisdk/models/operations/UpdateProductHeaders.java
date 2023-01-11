package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProductHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Match")
    public String ifMatch;
    public UpdateProductHeaders withIfMatch(String ifMatch) {
        this.ifMatch = ifMatch;
        return this;
    }
}