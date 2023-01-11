package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure
 * Planned branch closure
**/
public class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndDate")
    public String endDate;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartDate")
    public String startDate;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchPlannedBranchClosure withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}