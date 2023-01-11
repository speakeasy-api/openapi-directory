package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWirelessSimQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EId")
    public String eId;
    public ListWirelessSimQueryParams withEId(String eId) {
        this.eId = eId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Iccid")
    public String iccid;
    public ListWirelessSimQueryParams withIccid(String iccid) {
        this.iccid = iccid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListWirelessSimQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RatePlan")
    public String ratePlan;
    public ListWirelessSimQueryParams withRatePlan(String ratePlan) {
        this.ratePlan = ratePlan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SimRegistrationCode")
    public String simRegistrationCode;
    public ListWirelessSimQueryParams withSimRegistrationCode(String simRegistrationCode) {
        this.simRegistrationCode = simRegistrationCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public String status;
    public ListWirelessSimQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
}