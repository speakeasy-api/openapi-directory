package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestSpecification
 * A description of how to run the test.
**/
public class TestSpecification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidInstrumentationTest")
    public AndroidInstrumentationTest androidInstrumentationTest;
    public TestSpecification withAndroidInstrumentationTest(AndroidInstrumentationTest androidInstrumentationTest) {
        this.androidInstrumentationTest = androidInstrumentationTest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidRoboTest")
    public AndroidRoboTest androidRoboTest;
    public TestSpecification withAndroidRoboTest(AndroidRoboTest androidRoboTest) {
        this.androidRoboTest = androidRoboTest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidTestLoop")
    public AndroidTestLoop androidTestLoop;
    public TestSpecification withAndroidTestLoop(AndroidTestLoop androidTestLoop) {
        this.androidTestLoop = androidTestLoop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disablePerformanceMetrics")
    public Boolean disablePerformanceMetrics;
    public TestSpecification withDisablePerformanceMetrics(Boolean disablePerformanceMetrics) {
        this.disablePerformanceMetrics = disablePerformanceMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableVideoRecording")
    public Boolean disableVideoRecording;
    public TestSpecification withDisableVideoRecording(Boolean disableVideoRecording) {
        this.disableVideoRecording = disableVideoRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosTestLoop")
    public IosTestLoop iosTestLoop;
    public TestSpecification withIosTestLoop(IosTestLoop iosTestLoop) {
        this.iosTestLoop = iosTestLoop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosTestSetup")
    public IosTestSetup iosTestSetup;
    public TestSpecification withIosTestSetup(IosTestSetup iosTestSetup) {
        this.iosTestSetup = iosTestSetup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosXcTest")
    public IosXcTest iosXcTest;
    public TestSpecification withIosXcTest(IosXcTest iosXcTest) {
        this.iosXcTest = iosXcTest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testSetup")
    public TestSetup testSetup;
    public TestSpecification withTestSetup(TestSetup testSetup) {
        this.testSetup = testSetup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testTimeout")
    public String testTimeout;
    public TestSpecification withTestTimeout(String testTimeout) {
        this.testTimeout = testTimeout;
        return this;
    }
}