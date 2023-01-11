package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckKeyUsabilityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user_token")
    public String userToken;
    public CheckKeyUsabilityQueryParams withUserToken(String userToken) {
        this.userToken = userToken;
        return this;
    }
}