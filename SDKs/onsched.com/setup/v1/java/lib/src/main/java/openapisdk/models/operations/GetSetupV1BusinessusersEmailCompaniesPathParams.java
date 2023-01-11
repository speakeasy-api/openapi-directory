package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1BusinessusersEmailCompaniesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=email")
    public String email;
    public GetSetupV1BusinessusersEmailCompaniesPathParams withEmail(String email) {
        this.email = email;
        return this;
    }
}