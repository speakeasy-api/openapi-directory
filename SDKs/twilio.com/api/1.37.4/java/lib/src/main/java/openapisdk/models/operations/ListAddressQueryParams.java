package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CustomerName")
    public String customerName;
    public ListAddressQueryParams withCustomerName(String customerName) {
        this.customerName = customerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FriendlyName")
    public String friendlyName;
    public ListAddressQueryParams withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IsoCountry")
    public String isoCountry;
    public ListAddressQueryParams withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListAddressQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}