package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseSettingsEnterpriseNtp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_server")
    public String primaryServer;
    public EnterpriseSettingsEnterpriseNtp withPrimaryServer(String primaryServer) {
        this.primaryServer = primaryServer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondary_server")
    public String secondaryServer;
    public EnterpriseSettingsEnterpriseNtp withSecondaryServer(String secondaryServer) {
        this.secondaryServer = secondaryServer;
        return this;
    }
}