package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WaAccountResponse {
    @JsonProperty("api_key")
    public String apiKey;
    public WaAccountResponse withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applications")
    public String[] applications;
    public WaAccountResponse withApplications(String[] applications) {
        this.applications = applications;
        return this;
    }
    @JsonProperty("external_id")
    public String externalId;
    public WaAccountResponse withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WaAccountResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("provider")
    public String provider;
    public WaAccountResponse withProvider(String provider) {
        this.provider = provider;
        return this;
    }
}