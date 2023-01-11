package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTrustProductQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FriendlyName")
    public String friendlyName;
    public ListTrustProductQueryParams withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListTrustProductQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicySid")
    public String policySid;
    public ListTrustProductQueryParams withPolicySid(String policySid) {
        this.policySid = policySid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.TrustProductEnumStatusEnum status;
    public ListTrustProductQueryParams withStatus(openapisdk.models.shared.TrustProductEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}