package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Process
 * Represents an operating system process.
**/
public class Process {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("args")
    public String[] args;
    public Process withArgs(String[] args) {
        this.args = args;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("argumentsTruncated")
    public Boolean argumentsTruncated;
    public Process withArgumentsTruncated(Boolean argumentsTruncated) {
        this.argumentsTruncated = argumentsTruncated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binary")
    public File binary;
    public Process withBinary(File binary) {
        this.binary = binary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("envVariables")
    public EnvironmentVariable[] envVariables;
    public Process withEnvVariables(EnvironmentVariable[] envVariables) {
        this.envVariables = envVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("envVariablesTruncated")
    public Boolean envVariablesTruncated;
    public Process withEnvVariablesTruncated(Boolean envVariablesTruncated) {
        this.envVariablesTruncated = envVariablesTruncated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("libraries")
    public File[] libraries;
    public Process withLibraries(File[] libraries) {
        this.libraries = libraries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Process withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentPid")
    public String parentPid;
    public Process withParentPid(String parentPid) {
        this.parentPid = parentPid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pid")
    public String pid;
    public Process withPid(String pid) {
        this.pid = pid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public File script;
    public Process withScript(File script) {
        this.script = script;
        return this;
    }
}