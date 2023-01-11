package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveValidatedUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public RemoveValidatedUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}