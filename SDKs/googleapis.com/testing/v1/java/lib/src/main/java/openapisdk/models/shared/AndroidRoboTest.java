package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidRoboTest
 * A test of an android application that explores the application on a virtual or physical Android Device, finding culprits and crashes as it goes.
**/
public class AndroidRoboTest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appApk")
    public FileReference appApk;
    public AndroidRoboTest withAppApk(FileReference appApk) {
        this.appApk = appApk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appBundle")
    public AppBundle appBundle;
    public AndroidRoboTest withAppBundle(AppBundle appBundle) {
        this.appBundle = appBundle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appInitialActivity")
    public String appInitialActivity;
    public AndroidRoboTest withAppInitialActivity(String appInitialActivity) {
        this.appInitialActivity = appInitialActivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appPackageId")
    public String appPackageId;
    public AndroidRoboTest withAppPackageId(String appPackageId) {
        this.appPackageId = appPackageId;
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
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roboDirectives")
    public RoboDirective[] roboDirectives;
    public AndroidRoboTest withRoboDirectives(RoboDirective[] roboDirectives) {
        this.roboDirectives = roboDirectives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roboMode")
    public AndroidRoboTestRoboModeEnum roboMode;
    public AndroidRoboTest withRoboMode(AndroidRoboTestRoboModeEnum roboMode) {
        this.roboMode = roboMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roboScript")
    public FileReference roboScript;
    public AndroidRoboTest withRoboScript(FileReference roboScript) {
        this.roboScript = roboScript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startingIntents")
    public RoboStartingIntent[] startingIntents;
    public AndroidRoboTest withStartingIntents(RoboStartingIntent[] startingIntents) {
        this.startingIntents = startingIntents;
        return this;
    }
}