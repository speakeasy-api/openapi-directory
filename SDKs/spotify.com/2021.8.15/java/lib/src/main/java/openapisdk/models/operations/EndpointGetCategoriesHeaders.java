package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetCategoriesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetCategoriesHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}