package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUsersUserEmailSuspendPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userEmail")
    public String userEmail;
    public PutUsersUserEmailSuspendPathParams withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}