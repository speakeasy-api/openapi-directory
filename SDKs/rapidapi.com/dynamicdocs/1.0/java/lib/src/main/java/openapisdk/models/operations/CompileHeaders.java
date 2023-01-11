package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompileHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;
    public CompileHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}