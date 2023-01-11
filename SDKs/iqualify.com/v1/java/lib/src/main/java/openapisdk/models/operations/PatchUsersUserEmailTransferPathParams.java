package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchUsersUserEmailTransferPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userEmail")
    public String userEmail;
    public PatchUsersUserEmailTransferPathParams withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}