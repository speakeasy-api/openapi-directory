package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserEmailOfferingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userEmail")
    public String userEmail;
    public GetUsersUserEmailOfferingsPathParams withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}