package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnregisterMfaForSelfHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public UnregisterMfaForSelfHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}