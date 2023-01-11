package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatabaseInstance
 * Representation of a Realtime Database instance. Details on interacting with contents of a DatabaseInstance can be found at: https://firebase.google.com/docs/database/rest/start.
**/
public class DatabaseInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseUrl")
    public String databaseUrl;
    public DatabaseInstance withDatabaseUrl(String databaseUrl) {
        this.databaseUrl = databaseUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DatabaseInstance withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public String project;
    public DatabaseInstance withProject(String project) {
        this.project = project;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public DatabaseInstanceStateEnum state;
    public DatabaseInstance withState(DatabaseInstanceStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DatabaseInstanceTypeEnum type;
    public DatabaseInstance withType(DatabaseInstanceTypeEnum type) {
        this.type = type;
        return this;
    }
}