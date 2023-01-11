package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FailureDetail
 * Details for an outcome with a FAILURE outcome summary.
**/
public class FailureDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crashed")
    public Boolean crashed;
    public FailureDetail withCrashed(Boolean crashed) {
        this.crashed = crashed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceOutOfMemory")
    public Boolean deviceOutOfMemory;
    public FailureDetail withDeviceOutOfMemory(Boolean deviceOutOfMemory) {
        this.deviceOutOfMemory = deviceOutOfMemory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedRoboscript")
    public Boolean failedRoboscript;
    public FailureDetail withFailedRoboscript(Boolean failedRoboscript) {
        this.failedRoboscript = failedRoboscript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notInstalled")
    public Boolean notInstalled;
    public FailureDetail withNotInstalled(Boolean notInstalled) {
        this.notInstalled = notInstalled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherNativeCrash")
    public Boolean otherNativeCrash;
    public FailureDetail withOtherNativeCrash(Boolean otherNativeCrash) {
        this.otherNativeCrash = otherNativeCrash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timedOut")
    public Boolean timedOut;
    public FailureDetail withTimedOut(Boolean timedOut) {
        this.timedOut = timedOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unableToCrawl")
    public Boolean unableToCrawl;
    public FailureDetail withUnableToCrawl(Boolean unableToCrawl) {
        this.unableToCrawl = unableToCrawl;
        return this;
    }
}