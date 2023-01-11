package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStripeGatewayUserUserIdCardsCardIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=address_city")
    public String addressCity;
    public PostStripeGatewayUserUserIdCardsCardIdQueryParams withAddressCity(String addressCity) {
        this.addressCity = addressCity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=address_country")
    public String addressCountry;
    public PostStripeGatewayUserUserIdCardsCardIdQueryParams withAddressCountry(String addressCountry) {
        this.addressCountry = addressCountry;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=address_line1")
    public String addressLine1;
    public PostStripeGatewayUserUserIdCardsCardIdQueryParams withAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=address_line2")
    public String addressLine2;
    public PostStripeGatewayUserUserIdCardsCardIdQueryParams withAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=address_state")
    public String addressState;
    public PostStripeGatewayUserUserIdCardsCardIdQueryParams withAddressState(String addressState) {
        this.addressState = addressState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=address_zip")
    public String addressZip;
    public PostStripeGatewayUserUserIdCardsCardIdQueryParams withAddressZip(String addressZip) {
        this.addressZip = addressZip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isDefault")
    public Boolean isDefault;
    public PostStripeGatewayUserUserIdCardsCardIdQueryParams withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
}