package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNodeCompliance200ApplicationJsonDataNodes {
    @JsonProperty("compliance")
    public Float compliance;
    public GetNodeCompliance200ApplicationJsonDataNodes withCompliance(Float compliance) {
        this.compliance = compliance;
        return this;
    }
    @JsonProperty("complianceDetails")
    public GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails complianceDetails;
    public GetNodeCompliance200ApplicationJsonDataNodes withComplianceDetails(GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails complianceDetails) {
        this.complianceDetails = complianceDetails;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public GetNodeCompliance200ApplicationJsonDataNodes withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("mode")
    public GetNodeCompliance200ApplicationJsonDataNodesModeEnum mode;
    public GetNodeCompliance200ApplicationJsonDataNodes withMode(GetNodeCompliance200ApplicationJsonDataNodesModeEnum mode) {
        this.mode = mode;
        return this;
    }
}