package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMessengerAccountRequestBody {
    @JsonProperty("access_token")
    public String accessToken;
    public CreateMessengerAccountRequestBody withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applications")
    public String[] applications;
    public CreateMessengerAccountRequestBody withApplications(String[] applications) {
        this.applications = applications;
        return this;
    }
    @JsonProperty("external_id")
    public String externalId;
    public CreateMessengerAccountRequestBody withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateMessengerAccountRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}