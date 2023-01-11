package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SessionControllerLogoutQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public SessionControllerLogoutQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}