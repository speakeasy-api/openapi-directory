package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidInstrumentationTest
 * A test of an Android application that can control an Android component independently of its normal lifecycle. See for more information on types of Android tests.
**/
public class AndroidInstrumentationTest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testPackageId")
    public String testPackageId;
    public AndroidInstrumentationTest withTestPackageId(String testPackageId) {
        this.testPackageId = testPackageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testRunnerClass")
    public String testRunnerClass;
    public AndroidInstrumentationTest withTestRunnerClass(String testRunnerClass) {
        this.testRunnerClass = testRunnerClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testTargets")
    public String[] testTargets;
    public AndroidInstrumentationTest withTestTargets(String[] testTargets) {
        this.testTargets = testTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useOrchestrator")
    public Boolean useOrchestrator;
    public AndroidInstrumentationTest withUseOrchestrator(Boolean useOrchestrator) {
        this.useOrchestrator = useOrchestrator;
        return this;
    }
}