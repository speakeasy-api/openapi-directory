package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes {
    @JsonProperty("ClosingTime")
    public String closingTime;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes withClosingTime(String closingTime) {
        this.closingTime = closingTime;
        return this;
    }
    @JsonProperty("OpeningDay")
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum openingDay;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes withOpeningDay(GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimesOpeningDayEnum openingDay) {
        this.openingDay = openingDay;
        return this;
    }
    @JsonProperty("OpeningTime")
    public String openingTime;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes withOpeningTime(String openingTime) {
        this.openingTime = openingTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnavailableFinishTime")
    public String unavailableFinishTime;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes withUnavailableFinishTime(String unavailableFinishTime) {
        this.unavailableFinishTime = unavailableFinishTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnavailableStartTime")
    public String unavailableStartTime;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchOpeningTimes withUnavailableStartTime(String unavailableStartTime) {
        this.unavailableStartTime = unavailableStartTime;
        return this;
    }
}