package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IosXcTest
 * A test of an iOS application that uses the XCTest framework.
**/
public class IosXcTest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundleId")
    public String bundleId;
    public IosXcTest withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xcodeVersion")
    public String xcodeVersion;
    public IosXcTest withXcodeVersion(String xcodeVersion) {
        this.xcodeVersion = xcodeVersion;
        return this;
    }
}