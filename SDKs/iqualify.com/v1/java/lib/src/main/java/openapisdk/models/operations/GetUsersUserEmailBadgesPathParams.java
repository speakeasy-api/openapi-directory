package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserEmailBadgesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userEmail")
    public String userEmail;
    public GetUsersUserEmailBadgesPathParams withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}