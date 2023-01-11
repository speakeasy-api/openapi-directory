package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserEmailProgressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userEmail")
    public String userEmail;
    public GetUsersUserEmailProgressPathParams withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}