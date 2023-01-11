package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountToken {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountToken withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_created")
    public String dateCreated;
    public ApiV2010AccountToken withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public ApiV2010AccountToken withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ice_servers")
    public ApiV2010AccountTokenIceServers[] iceServers;
    public ApiV2010AccountToken withIceServers(ApiV2010AccountTokenIceServers[] iceServers) {
        this.iceServers = iceServers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public ApiV2010AccountToken withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public String ttl;
    public ApiV2010AccountToken withTtl(String ttl) {
        this.ttl = ttl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public ApiV2010AccountToken withUsername(String username) {
        this.username = username;
        return this;
    }
}