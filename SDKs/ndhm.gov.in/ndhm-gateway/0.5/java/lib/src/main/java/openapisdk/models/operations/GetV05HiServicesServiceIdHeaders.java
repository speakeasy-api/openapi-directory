package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV05HiServicesServiceIdHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetV05HiServicesServiceIdHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}