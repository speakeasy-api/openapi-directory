package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SplitCommissionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commission_arrangement")
    public String commissionArrangement;
    public SplitCommissionDetails withCommissionArrangement(String commissionArrangement) {
        this.commissionArrangement = commissionArrangement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_of_coverage")
    public String lineOfCoverage;
    public SplitCommissionDetails withLineOfCoverage(String lineOfCoverage) {
        this.lineOfCoverage = lineOfCoverage;
        return this;
    }
    @JsonProperty("percentage_of_commission")
    public String percentageOfCommission;
    public SplitCommissionDetails withPercentageOfCommission(String percentageOfCommission) {
        this.percentageOfCommission = percentageOfCommission;
        return this;
    }
}