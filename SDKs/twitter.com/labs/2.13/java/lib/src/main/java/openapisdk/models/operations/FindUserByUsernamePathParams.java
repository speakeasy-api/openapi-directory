package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindUserByUsernamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public FindUserByUsernamePathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}