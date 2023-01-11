package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMessengerAccount200ApplicationJson {
    @JsonProperty("access_token")
    public String accessToken;
    public UpdateMessengerAccount200ApplicationJson withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("api_key")
    public String apiKey;
    public UpdateMessengerAccount200ApplicationJson withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applications")
    public String[] applications;
    public UpdateMessengerAccount200ApplicationJson withApplications(String[] applications) {
        this.applications = applications;
        return this;
    }
    @JsonProperty("external_id")
    public String externalId;
    public UpdateMessengerAccount200ApplicationJson withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateMessengerAccount200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("provider")
    public String provider;
    public UpdateMessengerAccount200ApplicationJson withProvider(String provider) {
        this.provider = provider;
        return this;
    }
}