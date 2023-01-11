package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IosTestLoop
 * A test of an iOS application that implements one or more game loop scenarios. This test type accepts an archived application (.ipa file) and a list of integer scenarios that will be executed on the app sequentially.
**/
public class IosTestLoop {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appBundleId")
    public String appBundleId;
    public IosTestLoop withAppBundleId(String appBundleId) {
        this.appBundleId = appBundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appIpa")
    public FileReference appIpa;
    public IosTestLoop withAppIpa(FileReference appIpa) {
        this.appIpa = appIpa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scenarios")
    public Integer[] scenarios;
    public IosTestLoop withScenarios(Integer[] scenarios) {
        this.scenarios = scenarios;
        return this;
    }
}