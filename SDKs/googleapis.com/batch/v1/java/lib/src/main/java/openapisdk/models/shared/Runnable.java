package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Runnable
 * Runnable describes instructions for executing a specific script or container as part of a Task.
**/
public class Runnable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alwaysRun")
    public Boolean alwaysRun;
    public Runnable withAlwaysRun(Boolean alwaysRun) {
        this.alwaysRun = alwaysRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("background")
    public Boolean background;
    public Runnable withBackground(Boolean background) {
        this.background = background;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("barrier")
    public Barrier barrier;
    public Runnable withBarrier(Barrier barrier) {
        this.barrier = barrier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("container")
    public Container container;
    public Runnable withContainer(Container container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public Environment environment;
    public Runnable withEnvironment(Environment environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreExitStatus")
    public Boolean ignoreExitStatus;
    public Runnable withIgnoreExitStatus(Boolean ignoreExitStatus) {
        this.ignoreExitStatus = ignoreExitStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public Script script;
    public Runnable withScript(Script script) {
        this.script = script;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public String timeout;
    public Runnable withTimeout(String timeout) {
        this.timeout = timeout;
        return this;
    }
}