package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody {
    @JsonProperty("runners")
    public Long[] runners;
    public EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody withRunners(Long[] runners) {
        this.runners = runners;
        return this;
    }
}