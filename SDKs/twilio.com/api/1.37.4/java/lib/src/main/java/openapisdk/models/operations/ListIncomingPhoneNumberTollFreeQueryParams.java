package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIncomingPhoneNumberTollFreeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Beta")
    public Boolean beta;
    public ListIncomingPhoneNumberTollFreeQueryParams withBeta(Boolean beta) {
        this.beta = beta;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FriendlyName")
    public String friendlyName;
    public ListIncomingPhoneNumberTollFreeQueryParams withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Origin")
    public String origin;
    public ListIncomingPhoneNumberTollFreeQueryParams withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListIncomingPhoneNumberTollFreeQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PhoneNumber")
    public String phoneNumber;
    public ListIncomingPhoneNumberTollFreeQueryParams withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}