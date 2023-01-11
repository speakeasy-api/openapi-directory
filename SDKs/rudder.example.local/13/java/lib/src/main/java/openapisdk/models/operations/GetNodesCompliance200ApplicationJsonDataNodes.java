package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNodesCompliance200ApplicationJsonDataNodes {
    @JsonProperty("compliance")
    public Float compliance;
    public GetNodesCompliance200ApplicationJsonDataNodes withCompliance(Float compliance) {
        this.compliance = compliance;
        return this;
    }
    @JsonProperty("complianceDetails")
    public GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails complianceDetails;
    public GetNodesCompliance200ApplicationJsonDataNodes withComplianceDetails(GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails complianceDetails) {
        this.complianceDetails = complianceDetails;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public GetNodesCompliance200ApplicationJsonDataNodes withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("mode")
    public GetNodesCompliance200ApplicationJsonDataNodesModeEnum mode;
    public GetNodesCompliance200ApplicationJsonDataNodes withMode(GetNodesCompliance200ApplicationJsonDataNodesModeEnum mode) {
        this.mode = mode;
        return this;
    }
}