package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidTest
 * An Android mobile test specification.
**/
public class AndroidTest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidAppInfo")
    public AndroidAppInfo androidAppInfo;
    public AndroidTest withAndroidAppInfo(AndroidAppInfo androidAppInfo) {
        this.androidAppInfo = androidAppInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidInstrumentationTest")
    public AndroidInstrumentationTest androidInstrumentationTest;
    public AndroidTest withAndroidInstrumentationTest(AndroidInstrumentationTest androidInstrumentationTest) {
        this.androidInstrumentationTest = androidInstrumentationTest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidRoboTest")
    public AndroidRoboTest androidRoboTest;
    public AndroidTest withAndroidRoboTest(AndroidRoboTest androidRoboTest) {
        this.androidRoboTest = androidRoboTest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidTestLoop")
    public java.util.Map<String, Object> androidTestLoop;
    public AndroidTest withAndroidTestLoop(java.util.Map<String, Object> androidTestLoop) {
        this.androidTestLoop = androidTestLoop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testTimeout")
    public Duration testTimeout;
    public AndroidTest withTestTimeout(Duration testTimeout) {
        this.testTimeout = testTimeout;
        return this;
    }
}