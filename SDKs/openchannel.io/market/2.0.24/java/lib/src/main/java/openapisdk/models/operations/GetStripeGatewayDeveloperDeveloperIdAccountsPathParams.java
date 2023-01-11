package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStripeGatewayDeveloperDeveloperIdAccountsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=developerId")
    public String developerId;
    public GetStripeGatewayDeveloperDeveloperIdAccountsPathParams withDeveloperId(String developerId) {
        this.developerId = developerId;
        return this;
    }
}