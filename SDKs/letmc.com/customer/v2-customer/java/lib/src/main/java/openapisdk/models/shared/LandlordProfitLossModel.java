package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LandlordProfitLossModel
 * Class to represent proffit loss report.
**/
public class LandlordProfitLossModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectCosts")
    public LandlordProfitLossSectionModel directCosts;
    public LandlordProfitLossModel withDirectCosts(LandlordProfitLossSectionModel directCosts) {
        this.directCosts = directCosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GrossProfitLoss")
    public LandlordProfitLossSectionModel grossProfitLoss;
    public LandlordProfitLossModel withGrossProfitLoss(LandlordProfitLossSectionModel grossProfitLoss) {
        this.grossProfitLoss = grossProfitLoss;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Income")
    public LandlordProfitLossSectionModel income;
    public LandlordProfitLossModel withIncome(LandlordProfitLossSectionModel income) {
        this.income = income;
        return this;
    }
}