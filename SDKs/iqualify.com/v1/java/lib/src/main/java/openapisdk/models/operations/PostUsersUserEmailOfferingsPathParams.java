package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersUserEmailOfferingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userEmail")
    public String userEmail;
    public PostUsersUserEmailOfferingsPathParams withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}