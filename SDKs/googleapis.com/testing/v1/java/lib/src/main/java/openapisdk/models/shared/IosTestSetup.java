package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IosTestSetup
 * A description of how to set up an iOS device prior to running the test.
**/
public class IosTestSetup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalIpas")
    public FileReference[] additionalIpas;
    public IosTestSetup withAdditionalIpas(FileReference[] additionalIpas) {
        this.additionalIpas = additionalIpas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkProfile")
    public String networkProfile;
    public IosTestSetup withNetworkProfile(String networkProfile) {
        this.networkProfile = networkProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullDirectories")
    public IosDeviceFile[] pullDirectories;
    public IosTestSetup withPullDirectories(IosDeviceFile[] pullDirectories) {
        this.pullDirectories = pullDirectories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pushFiles")
    public IosDeviceFile[] pushFiles;
    public IosTestSetup withPushFiles(IosDeviceFile[] pushFiles) {
        this.pushFiles = pushFiles;
        return this;
    }
}