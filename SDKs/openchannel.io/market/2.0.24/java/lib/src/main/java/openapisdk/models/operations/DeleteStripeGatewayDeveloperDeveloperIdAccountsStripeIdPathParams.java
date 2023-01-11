package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=developerId")
    public String developerId;
    public DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdPathParams withDeveloperId(String developerId) {
        this.developerId = developerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stripeId")
    public String stripeId;
    public DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdPathParams withStripeId(String stripeId) {
        this.stripeId = stripeId;
        return this;
    }
}