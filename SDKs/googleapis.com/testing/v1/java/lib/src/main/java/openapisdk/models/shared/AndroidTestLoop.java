package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidTestLoop
 * A test of an Android Application with a Test Loop. The intent \ will be implicitly added, since Games is the only user of this api, for the time being.
**/
public class AndroidTestLoop {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appApk")
    public FileReference appApk;
    public AndroidTestLoop withAppApk(FileReference appApk) {
        this.appApk = appApk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appBundle")
    public AppBundle appBundle;
    public AndroidTestLoop withAppBundle(AppBundle appBundle) {
        this.appBundle = appBundle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appPackageId")
    public String appPackageId;
    public AndroidTestLoop withAppPackageId(String appPackageId) {
        this.appPackageId = appPackageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scenarioLabels")
    public String[] scenarioLabels;
    public AndroidTestLoop withScenarioLabels(String[] scenarioLabels) {
        this.scenarioLabels = scenarioLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scenarios")
    public Integer[] scenarios;
    public AndroidTestLoop withScenarios(Integer[] scenarios) {
        this.scenarios = scenarios;
        return this;
    }
}