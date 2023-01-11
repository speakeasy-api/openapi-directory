package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCustomGatewayPaymentOwnershipIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=amount")
    public Long amount;
    public PostCustomGatewayPaymentOwnershipIdQueryParams withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customData")
    public String customData;
    public PostCustomGatewayPaymentOwnershipIdQueryParams withCustomData(String customData) {
        this.customData = customData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public Long date;
    public PostCustomGatewayPaymentOwnershipIdQueryParams withDate(Long date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=developerAmount")
    public Long developerAmount;
    public PostCustomGatewayPaymentOwnershipIdQueryParams withDeveloperAmount(Long developerAmount) {
        this.developerAmount = developerAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=feeAmount")
    public Long feeAmount;
    public PostCustomGatewayPaymentOwnershipIdQueryParams withFeeAmount(Long feeAmount) {
        this.feeAmount = feeAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marketplaceAmount")
    public Long marketplaceAmount;
    public PostCustomGatewayPaymentOwnershipIdQueryParams withMarketplaceAmount(Long marketplaceAmount) {
        this.marketplaceAmount = marketplaceAmount;
        return this;
    }
}