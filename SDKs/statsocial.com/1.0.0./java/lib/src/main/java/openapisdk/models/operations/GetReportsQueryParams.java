package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=baseline")
    public Long baseline;
    public GetReportsQueryParams withBaseline(Long baseline) {
        this.baseline = baseline;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_date")
    public Long reportDate;
    public GetReportsQueryParams withReportDate(Long reportDate) {
        this.reportDate = reportDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=report_hash")
    public String reportHash;
    public GetReportsQueryParams withReportHash(String reportHash) {
        this.reportHash = reportHash;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sample")
    public Long sample;
    public GetReportsQueryParams withSample(Long sample) {
        this.sample = sample;
        return this;
    }
}