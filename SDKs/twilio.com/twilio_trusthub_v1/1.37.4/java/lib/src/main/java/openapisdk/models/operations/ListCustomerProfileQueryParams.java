package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCustomerProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FriendlyName")
    public String friendlyName;
    public ListCustomerProfileQueryParams withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListCustomerProfileQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicySid")
    public String policySid;
    public ListCustomerProfileQueryParams withPolicySid(String policySid) {
        this.policySid = policySid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.CustomerProfileEnumStatusEnum status;
    public ListCustomerProfileQueryParams withStatus(openapisdk.models.shared.CustomerProfileEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}