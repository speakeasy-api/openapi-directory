package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestSetup
 * A description of how to set up the Android device prior to running the test.
**/
public class TestSetup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public Account account;
    public TestSetup withAccount(Account account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalApks")
    public Apk[] additionalApks;
    public TestSetup withAdditionalApks(Apk[] additionalApks) {
        this.additionalApks = additionalApks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directoriesToPull")
    public String[] directoriesToPull;
    public TestSetup withDirectoriesToPull(String[] directoriesToPull) {
        this.directoriesToPull = directoriesToPull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dontAutograntPermissions")
    public Boolean dontAutograntPermissions;
    public TestSetup withDontAutograntPermissions(Boolean dontAutograntPermissions) {
        this.dontAutograntPermissions = dontAutograntPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentVariables")
    public EnvironmentVariable[] environmentVariables;
    public TestSetup withEnvironmentVariables(EnvironmentVariable[] environmentVariables) {
        this.environmentVariables = environmentVariables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filesToPush")
    public DeviceFile[] filesToPush;
    public TestSetup withFilesToPush(DeviceFile[] filesToPush) {
        this.filesToPush = filesToPush;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkProfile")
    public String networkProfile;
    public TestSetup withNetworkProfile(String networkProfile) {
        this.networkProfile = networkProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("systrace")
    public SystraceSetup systrace;
    public TestSetup withSystrace(SystraceSetup systrace) {
        this.systrace = systrace;
        return this;
    }
}