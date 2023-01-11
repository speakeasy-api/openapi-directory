package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAMapHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-App-Token")
    public String xAppToken;
    public CreateAMapHeaders withXAppToken(String xAppToken) {
        this.xAppToken = xAppToken;
        return this;
    }
}