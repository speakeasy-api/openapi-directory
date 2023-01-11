package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAspspAuthorizationLinkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CreateAspspAuthorizationLinkPathParams withId(String id) {
        this.id = id;
        return this;
    }
}