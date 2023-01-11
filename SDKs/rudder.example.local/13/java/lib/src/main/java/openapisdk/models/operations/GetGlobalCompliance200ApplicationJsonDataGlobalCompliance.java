package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGlobalCompliance200ApplicationJsonDataGlobalCompliance {
    @JsonProperty("compliance")
    public Double compliance;
    public GetGlobalCompliance200ApplicationJsonDataGlobalCompliance withCompliance(Double compliance) {
        this.compliance = compliance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complianceDetails")
    public GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails complianceDetails;
    public GetGlobalCompliance200ApplicationJsonDataGlobalCompliance withComplianceDetails(GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails complianceDetails) {
        this.complianceDetails = complianceDetails;
        return this;
    }
}