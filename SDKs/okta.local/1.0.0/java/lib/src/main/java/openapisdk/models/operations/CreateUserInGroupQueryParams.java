package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUserInGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=activate")
    public String activate;
    public CreateUserInGroupQueryParams withActivate(String activate) {
        this.activate = activate;
        return this;
    }
}