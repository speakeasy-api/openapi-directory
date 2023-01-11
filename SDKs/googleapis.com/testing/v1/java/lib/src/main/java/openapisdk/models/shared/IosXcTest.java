package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IosXcTest
 * A test of an iOS application that uses the XCTest framework. Xcode supports the option to "build for testing", which generates an .xctestrun file that contains a test specification (arguments, test methods, etc). This test type accepts a zip file containing the .xctestrun file and the corresponding contents of the Build/Products directory that contains all the binaries needed to run the tests.
**/
public class IosXcTest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appBundleId")
    public String appBundleId;
    public IosXcTest withAppBundleId(String appBundleId) {
        this.appBundleId = appBundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testSpecialEntitlements")
    public Boolean testSpecialEntitlements;
    public IosXcTest withTestSpecialEntitlements(Boolean testSpecialEntitlements) {
        this.testSpecialEntitlements = testSpecialEntitlements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testsZip")
    public FileReference testsZip;
    public IosXcTest withTestsZip(FileReference testsZip) {
        this.testsZip = testsZip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xcodeVersion")
    public String xcodeVersion;
    public IosXcTest withXcodeVersion(String xcodeVersion) {
        this.xcodeVersion = xcodeVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xctestrun")
    public FileReference xctestrun;
    public IosXcTest withXctestrun(FileReference xctestrun) {
        this.xctestrun = xctestrun;
        return this;
    }
}