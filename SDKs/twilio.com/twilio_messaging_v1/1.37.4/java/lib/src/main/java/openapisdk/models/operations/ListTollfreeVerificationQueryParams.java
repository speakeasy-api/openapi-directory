package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTollfreeVerificationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListTollfreeVerificationQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.TollfreeVerificationEnumStatusEnum status;
    public ListTollfreeVerificationQueryParams withStatus(openapisdk.models.shared.TollfreeVerificationEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TollfreePhoneNumberSid")
    public String tollfreePhoneNumberSid;
    public ListTollfreeVerificationQueryParams withTollfreePhoneNumberSid(String tollfreePhoneNumberSid) {
        this.tollfreePhoneNumberSid = tollfreePhoneNumberSid;
        return this;
    }
}