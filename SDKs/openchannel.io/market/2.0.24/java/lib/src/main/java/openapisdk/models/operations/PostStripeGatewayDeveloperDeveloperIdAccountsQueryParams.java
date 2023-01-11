package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStripeGatewayDeveloperDeveloperIdAccountsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=redirectUrl")
    public String redirectUrl;
    public PostStripeGatewayDeveloperDeveloperIdAccountsQueryParams withRedirectUrl(String redirectUrl) {
        this.redirectUrl = redirectUrl;
        return this;
    }
}