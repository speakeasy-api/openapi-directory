package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidRoboTest
 * A test of an android application that explores the application on a virtual or physical Android device, finding culprits and crashes as it goes.
**/
public class AndroidRoboTest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appInitialActivity")
    public String appInitialActivity;
    public AndroidRoboTest withAppInitialActivity(String appInitialActivity) {
        this.appInitialActivity = appInitialActivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootstrapPackageId")
    public String bootstrapPackageId;
    public AndroidRoboTest withBootstrapPackageId(String bootstrapPackageId) {
        this.bootstrapPackageId = bootstrapPackageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bootstrapRunnerClass")
    public String bootstrapRunnerClass;
    public AndroidRoboTest withBootstrapRunnerClass(String bootstrapRunnerClass) {
        this.bootstrapRunnerClass = bootstrapRunnerClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxDepth")
    public Integer maxDepth;
    public AndroidRoboTest withMaxDepth(Integer maxDepth) {
        this.maxDepth = maxDepth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxSteps")
    public Integer maxSteps;
    public AndroidRoboTest withMaxSteps(Integer maxSteps) {
        this.maxSteps = maxSteps;
        return this;
    }
}