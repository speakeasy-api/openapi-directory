package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LinkApplicationRequestBody {
    @JsonProperty("application")
    public String application;
    public LinkApplicationRequestBody withApplication(String application) {
        this.application = application;
        return this;
    }
}