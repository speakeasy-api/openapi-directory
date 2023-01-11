package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeCustomerAccessCode {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeCustomerAccessCode withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}