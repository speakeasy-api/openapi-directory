package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStripeGatewayDeveloperDeveloperIdAccountsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=developerId")
    public String developerId;
    public PostStripeGatewayDeveloperDeveloperIdAccountsPathParams withDeveloperId(String developerId) {
        this.developerId = developerId;
        return this;
    }
}