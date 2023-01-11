package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SessionControllerResetPasswordQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public SessionControllerResetPasswordQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
}