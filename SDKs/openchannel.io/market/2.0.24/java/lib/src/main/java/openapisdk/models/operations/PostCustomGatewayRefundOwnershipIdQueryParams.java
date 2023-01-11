package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCustomGatewayRefundOwnershipIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=amount")
    public Long amount;
    public PostCustomGatewayRefundOwnershipIdQueryParams withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customData")
    public String customData;
    public PostCustomGatewayRefundOwnershipIdQueryParams withCustomData(String customData) {
        this.customData = customData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public Long date;
    public PostCustomGatewayRefundOwnershipIdQueryParams withDate(Long date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=developerAmount")
    public Long developerAmount;
    public PostCustomGatewayRefundOwnershipIdQueryParams withDeveloperAmount(Long developerAmount) {
        this.developerAmount = developerAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=feeAmount")
    public Long feeAmount;
    public PostCustomGatewayRefundOwnershipIdQueryParams withFeeAmount(Long feeAmount) {
        this.feeAmount = feeAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marketplaceAmount")
    public Long marketplaceAmount;
    public PostCustomGatewayRefundOwnershipIdQueryParams withMarketplaceAmount(Long marketplaceAmount) {
        this.marketplaceAmount = marketplaceAmount;
        return this;
    }
}