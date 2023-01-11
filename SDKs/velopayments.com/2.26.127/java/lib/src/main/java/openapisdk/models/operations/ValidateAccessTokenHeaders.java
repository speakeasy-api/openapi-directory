package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateAccessTokenHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public ValidateAccessTokenHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}