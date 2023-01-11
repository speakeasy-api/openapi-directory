package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType
 * Other Code Type
**/
public class GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType withName(String name) {
        this.name = name;
        return this;
    }
}