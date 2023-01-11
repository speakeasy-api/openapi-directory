package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserEmailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userEmail")
    public String userEmail;
    public GetUsersUserEmailPathParams withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}