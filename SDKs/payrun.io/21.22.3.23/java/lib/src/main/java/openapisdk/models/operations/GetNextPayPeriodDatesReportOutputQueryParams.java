package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNextPayPeriodDatesReportOutputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployerKey")
    public String employerKey;
    public GetNextPayPeriodDatesReportOutputQueryParams withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PayScheduleKey")
    public String payScheduleKey;
    public GetNextPayPeriodDatesReportOutputQueryParams withPayScheduleKey(String payScheduleKey) {
        this.payScheduleKey = payScheduleKey;
        return this;
    }
}