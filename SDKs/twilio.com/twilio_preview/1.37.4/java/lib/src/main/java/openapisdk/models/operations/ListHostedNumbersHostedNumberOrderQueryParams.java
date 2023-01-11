package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListHostedNumbersHostedNumberOrderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FriendlyName")
    public String friendlyName;
    public ListHostedNumbersHostedNumberOrderQueryParams withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IncomingPhoneNumberSid")
    public String incomingPhoneNumberSid;
    public ListHostedNumbersHostedNumberOrderQueryParams withIncomingPhoneNumberSid(String incomingPhoneNumberSid) {
        this.incomingPhoneNumberSid = incomingPhoneNumberSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListHostedNumbersHostedNumberOrderQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PhoneNumber")
    public String phoneNumber;
    public ListHostedNumbersHostedNumberOrderQueryParams withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.HostedNumberOrderEnumStatusEnum status;
    public ListHostedNumbersHostedNumberOrderQueryParams withStatus(openapisdk.models.shared.HostedNumberOrderEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UniqueName")
    public String uniqueName;
    public ListHostedNumbersHostedNumberOrderQueryParams withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}