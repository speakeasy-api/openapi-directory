package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposAddAppAccessRestrictionsRequestBody1 {
    @JsonProperty("apps")
    public String[] apps;
    public ReposAddAppAccessRestrictionsRequestBody1 withApps(String[] apps) {
        this.apps = apps;
        return this;
    }
}