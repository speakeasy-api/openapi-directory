package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsCreateImage201ApplicationJsonImageProtection
 * Protection configuration for the Resource
**/
public class PostServersIdActionsCreateImage201ApplicationJsonImageProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public PostServersIdActionsCreateImage201ApplicationJsonImageProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}