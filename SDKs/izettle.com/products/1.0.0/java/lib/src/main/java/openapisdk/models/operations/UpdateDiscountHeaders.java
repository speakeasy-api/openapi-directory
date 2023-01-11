package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDiscountHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Match")
    public String ifMatch;
    public UpdateDiscountHeaders withIfMatch(String ifMatch) {
        this.ifMatch = ifMatch;
        return this;
    }
}