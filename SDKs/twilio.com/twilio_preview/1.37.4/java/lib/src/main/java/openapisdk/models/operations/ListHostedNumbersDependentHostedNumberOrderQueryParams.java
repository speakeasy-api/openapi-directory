package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListHostedNumbersDependentHostedNumberOrderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FriendlyName")
    public String friendlyName;
    public ListHostedNumbersDependentHostedNumberOrderQueryParams withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IncomingPhoneNumberSid")
    public String incomingPhoneNumberSid;
    public ListHostedNumbersDependentHostedNumberOrderQueryParams withIncomingPhoneNumberSid(String incomingPhoneNumberSid) {
        this.incomingPhoneNumberSid = incomingPhoneNumberSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListHostedNumbersDependentHostedNumberOrderQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PhoneNumber")
    public String phoneNumber;
    public ListHostedNumbersDependentHostedNumberOrderQueryParams withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.DependentHostedNumberOrderEnumStatusEnum status;
    public ListHostedNumbersDependentHostedNumberOrderQueryParams withStatus(openapisdk.models.shared.DependentHostedNumberOrderEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UniqueName")
    public String uniqueName;
    public ListHostedNumbersDependentHostedNumberOrderQueryParams withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}