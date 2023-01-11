package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoNotDisturbHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;
    public DoNotDisturbHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}