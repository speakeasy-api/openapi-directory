package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Command
 * Command describes a step performed as part of the build pipeline.
**/
public class Command {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("args")
    public String[] args;
    public Command withArgs(String[] args) {
        this.args = args;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dir")
    public String dir;
    public Command withDir(String dir) {
        this.dir = dir;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("env")
    public String[] env;
    public Command withEnv(String[] env) {
        this.env = env;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Command withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Command withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waitFor")
    public String[] waitFor;
    public Command withWaitFor(String[] waitFor) {
        this.waitFor = waitFor;
        return this;
    }
}