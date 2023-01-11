package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Done {
    @JsonProperty("done")
    public Boolean done;
    public Done withDone(Boolean done) {
        this.done = done;
        return this;
    }
}