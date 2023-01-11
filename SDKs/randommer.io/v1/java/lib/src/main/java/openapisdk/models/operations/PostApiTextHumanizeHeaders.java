package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostApiTextHumanizeHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Api-Key")
    public String xApiKey;
    public PostApiTextHumanizeHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}