package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency
 * Other Code Type
**/
public class GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency withName(String name) {
        this.name = name;
        return this;
    }
}