package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IosTest
 * A iOS mobile test specification
**/
public class IosTest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosAppInfo")
    public IosAppInfo iosAppInfo;
    public IosTest withIosAppInfo(IosAppInfo iosAppInfo) {
        this.iosAppInfo = iosAppInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosRoboTest")
    public java.util.Map<String, Object> iosRoboTest;
    public IosTest withIosRoboTest(java.util.Map<String, Object> iosRoboTest) {
        this.iosRoboTest = iosRoboTest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosTestLoop")
    public IosTestLoop iosTestLoop;
    public IosTest withIosTestLoop(IosTestLoop iosTestLoop) {
        this.iosTestLoop = iosTestLoop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosXcTest")
    public IosXcTest iosXcTest;
    public IosTest withIosXcTest(IosXcTest iosXcTest) {
        this.iosXcTest = iosXcTest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testTimeout")
    public Duration testTimeout;
    public IosTest withTestTimeout(Duration testTimeout) {
        this.testTimeout = testTimeout;
        return this;
    }
}