package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TeamProjectPermissions {
    @JsonProperty("admin")
    public Boolean admin;
    public TeamProjectPermissions withAdmin(Boolean admin) {
        this.admin = admin;
        return this;
    }
    @JsonProperty("read")
    public Boolean read;
    public TeamProjectPermissions withRead(Boolean read) {
        this.read = read;
        return this;
    }
    @JsonProperty("write")
    public Boolean write;
    public TeamProjectPermissions withWrite(Boolean write) {
        this.write = write;
        return this;
    }
}