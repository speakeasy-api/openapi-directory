package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSimQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EId")
    public String eId;
    public ListSimQueryParams withEId(String eId) {
        this.eId = eId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Iccid")
    public String iccid;
    public ListSimQueryParams withIccid(String iccid) {
        this.iccid = iccid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSimQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RatePlan")
    public String ratePlan;
    public ListSimQueryParams withRatePlan(String ratePlan) {
        this.ratePlan = ratePlan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SimRegistrationCode")
    public String simRegistrationCode;
    public ListSimQueryParams withSimRegistrationCode(String simRegistrationCode) {
        this.simRegistrationCode = simRegistrationCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.SimEnumStatusEnum status;
    public ListSimQueryParams withStatus(openapisdk.models.shared.SimEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}