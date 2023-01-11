package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAllAccountResponse {
    @JsonProperty("access_token")
    public String accessToken;
    public GetAllAccountResponse withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("api_key")
    public String apiKey;
    public GetAllAccountResponse withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applications")
    public String[] applications;
    public GetAllAccountResponse withApplications(String[] applications) {
        this.applications = applications;
        return this;
    }
    @JsonProperty("external_id")
    public String externalId;
    public GetAllAccountResponse withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetAllAccountResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("provider")
    public String provider;
    public GetAllAccountResponse withProvider(String provider) {
        this.provider = provider;
        return this;
    }
}