package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Location {
    @JsonProperty("teams")
    public java.util.Map<String, String>[] teams;
    public Location withTeams(java.util.Map<String, String>[] teams) {
        this.teams = teams;
        return this;
    }
    @JsonProperty("tenant")
    public String tenant;
    public Location withTenant(String tenant) {
        this.tenant = tenant;
        return this;
    }
}