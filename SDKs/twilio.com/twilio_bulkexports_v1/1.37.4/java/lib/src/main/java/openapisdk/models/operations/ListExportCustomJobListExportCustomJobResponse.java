package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListExportCustomJobListExportCustomJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobs")
    public openapisdk.models.shared.BulkexportsV1ExportExportCustomJob[] jobs;
    public ListExportCustomJobListExportCustomJobResponse withJobs(openapisdk.models.shared.BulkexportsV1ExportExportCustomJob[] jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListExportCustomJobListExportCustomJobResponseMeta meta;
    public ListExportCustomJobListExportCustomJobResponse withMeta(ListExportCustomJobListExportCustomJobResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}