package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SessionControllerChangePasswordQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=newPassword")
    public String newPassword;
    public SessionControllerChangePasswordQueryParams withNewPassword(String newPassword) {
        this.newPassword = newPassword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oldPassword")
    public String oldPassword;
    public SessionControllerChangePasswordQueryParams withOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public SessionControllerChangePasswordQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}