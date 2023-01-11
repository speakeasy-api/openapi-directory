package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Aogh {
    @JsonProperty("aogh_api_version")
    public String aoghApiVersion;
    public Aogh withAoghApiVersion(String aoghApiVersion) {
        this.aoghApiVersion = aoghApiVersion;
        return this;
    }
}