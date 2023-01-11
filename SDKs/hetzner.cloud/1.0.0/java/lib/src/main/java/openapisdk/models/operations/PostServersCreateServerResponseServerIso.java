package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersCreateServerResponseServerIso
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
public class PostServersCreateServerResponseServerIso {
    @JsonProperty("deprecated")
    public String deprecated;
    public PostServersCreateServerResponseServerIso withDeprecated(String deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PostServersCreateServerResponseServerIso withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostServersCreateServerResponseServerIso withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostServersCreateServerResponseServerIso withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public PostServersCreateServerResponseServerIsoTypeEnum type;
    public PostServersCreateServerResponseServerIso withType(PostServersCreateServerResponseServerIsoTypeEnum type) {
        this.type = type;
        return this;
    }
}