package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersUserEmailInviteEmailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userEmail")
    public String userEmail;
    public PostUsersUserEmailInviteEmailPathParams withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}