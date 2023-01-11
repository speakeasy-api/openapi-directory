package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidInstrumentationTest
 * A test of an Android application that can control an Android component independently of its normal lifecycle. Android instrumentation tests run an application APK and test APK inside the same process on a virtual or physical AndroidDevice. They also specify a test runner class, such as com.google.GoogleTestRunner, which can vary on the specific instrumentation framework chosen. See for more information on types of Android tests.
**/
public class AndroidInstrumentationTest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appApk")
    public FileReference appApk;
    public AndroidInstrumentationTest withAppApk(FileReference appApk) {
        this.appApk = appApk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appBundle")
    public AppBundle appBundle;
    public AndroidInstrumentationTest withAppBundle(AppBundle appBundle) {
        this.appBundle = appBundle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appPackageId")
    public String appPackageId;
    public AndroidInstrumentationTest withAppPackageId(String appPackageId) {
        this.appPackageId = appPackageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orchestratorOption")
    public AndroidInstrumentationTestOrchestratorOptionEnum orchestratorOption;
    public AndroidInstrumentationTest withOrchestratorOption(AndroidInstrumentationTestOrchestratorOptionEnum orchestratorOption) {
        this.orchestratorOption = orchestratorOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shardingOption")
    public ShardingOption shardingOption;
    public AndroidInstrumentationTest withShardingOption(ShardingOption shardingOption) {
        this.shardingOption = shardingOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testApk")
    public FileReference testApk;
    public AndroidInstrumentationTest withTestApk(FileReference testApk) {
        this.testApk = testApk;
        return this;
    }
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
}