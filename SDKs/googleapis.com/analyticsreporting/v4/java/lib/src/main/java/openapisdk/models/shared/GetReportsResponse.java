package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetReportsResponse
 * The main response class which holds the reports from the Reporting API `batchGet` call.
**/
public class GetReportsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryCost")
    public Integer queryCost;
    public GetReportsResponse withQueryCost(Integer queryCost) {
        this.queryCost = queryCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reports")
    public Report[] reports;
    public GetReportsResponse withReports(Report[] reports) {
        this.reports = reports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceQuotasRemaining")
    public ResourceQuotasRemaining resourceQuotasRemaining;
    public GetReportsResponse withResourceQuotasRemaining(ResourceQuotasRemaining resourceQuotasRemaining) {
        this.resourceQuotasRemaining = resourceQuotasRemaining;
        return this;
    }
}