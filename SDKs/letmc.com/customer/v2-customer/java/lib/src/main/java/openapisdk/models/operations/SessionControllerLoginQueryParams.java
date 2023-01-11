package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SessionControllerLoginQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=password")
    public String password;
    public SessionControllerLoginQueryParams withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=username")
    public String username;
    public SessionControllerLoginQueryParams withUsername(String username) {
        this.username = username;
        return this;
    }
}