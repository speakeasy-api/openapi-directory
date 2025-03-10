/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LandlordProfitLossModel - Class to represent proffit loss report.
 */
public class LandlordProfitLossModel {
    /**
     * Class for a group of entries.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectCosts")
    public LandlordProfitLossSectionModel directCosts;

    public LandlordProfitLossModel withDirectCosts(LandlordProfitLossSectionModel directCosts) {
        this.directCosts = directCosts;
        return this;
    }
    
    /**
     * Class for a group of entries.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GrossProfitLoss")
    public LandlordProfitLossSectionModel grossProfitLoss;

    public LandlordProfitLossModel withGrossProfitLoss(LandlordProfitLossSectionModel grossProfitLoss) {
        this.grossProfitLoss = grossProfitLoss;
        return this;
    }
    
    /**
     * Class for a group of entries.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Income")
    public LandlordProfitLossSectionModel income;

    public LandlordProfitLossModel withIncome(LandlordProfitLossSectionModel income) {
        this.income = income;
        return this;
    }
    
    public LandlordProfitLossModel(){}
}
