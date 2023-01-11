package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RootV1ScoringsConsolidatedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AppId")
    public String appId;
    public RootV1ScoringsConsolidatedQueryParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CompanyId")
    public String companyId;
    public RootV1ScoringsConsolidatedQueryParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DeviceToken")
    public String deviceToken;
    public RootV1ScoringsConsolidatedQueryParams withDeviceToken(String deviceToken) {
        this.deviceToken = deviceToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndDate")
    public String endDate;
    public RootV1ScoringsConsolidatedQueryParams withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public RootV1ScoringsConsolidatedQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartDate")
    public String startDate;
    public RootV1ScoringsConsolidatedQueryParams withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Tag")
    public String tag;
    public RootV1ScoringsConsolidatedQueryParams withTag(String tag) {
        this.tag = tag;
        return this;
    }
}