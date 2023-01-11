package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserUsernamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetUserUsernamePathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}