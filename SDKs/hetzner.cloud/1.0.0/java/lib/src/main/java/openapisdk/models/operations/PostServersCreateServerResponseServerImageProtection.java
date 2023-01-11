package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersCreateServerResponseServerImageProtection
 * Protection configuration for the Resource
**/
public class PostServersCreateServerResponseServerImageProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public PostServersCreateServerResponseServerImageProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}