package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=user-agent")
    public String userAgent;
    public ValidateHeaders withUserAgent(String userAgent) {
        this.userAgent = userAgent;
        return this;
    }
}