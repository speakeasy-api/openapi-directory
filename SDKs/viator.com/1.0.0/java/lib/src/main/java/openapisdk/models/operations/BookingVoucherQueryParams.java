package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BookingVoucherQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embeddedResources")
    public Boolean embeddedResources;
    public BookingVoucherQueryParams withEmbeddedResources(Boolean embeddedResources) {
        this.embeddedResources = embeddedResources;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fullHTML")
    public Boolean fullHTML;
    public BookingVoucherQueryParams withFullHtml(Boolean fullHTML) {
        this.fullHTML = fullHTML;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=itemId")
    public Long itemId;
    public BookingVoucherQueryParams withItemId(Long itemId) {
        this.itemId = itemId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=leadLastName")
    public String leadLastName;
    public BookingVoucherQueryParams withLeadLastName(String leadLastName) {
        this.leadLastName = leadLastName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mobileVoucher")
    public Boolean mobileVoucher;
    public BookingVoucherQueryParams withMobileVoucher(Boolean mobileVoucher) {
        this.mobileVoucher = mobileVoucher;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=voucherKey")
    public String voucherKey;
    public BookingVoucherQueryParams withVoucherKey(String voucherKey) {
        this.voucherKey = voucherKey;
        return this;
    }
}