package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIncomingPhoneNumberQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Beta")
    public Boolean beta;
    public ListIncomingPhoneNumberQueryParams withBeta(Boolean beta) {
        this.beta = beta;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FriendlyName")
    public String friendlyName;
    public ListIncomingPhoneNumberQueryParams withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Origin")
    public String origin;
    public ListIncomingPhoneNumberQueryParams withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListIncomingPhoneNumberQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PhoneNumber")
    public String phoneNumber;
    public ListIncomingPhoneNumberQueryParams withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}