package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpgradeOccurrence
 * An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability). For Windows, both distribution and windows_update contain information for the Windows update.
**/
public class UpgradeOccurrence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distribution")
    public UpgradeDistribution distribution;
    public UpgradeOccurrence withDistribution(UpgradeDistribution distribution) {
        this.distribution = distribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("package")
    public String package_;
    public UpgradeOccurrence withPackage(String package_) {
        this.package_ = package_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parsedVersion")
    public Version parsedVersion;
    public UpgradeOccurrence withParsedVersion(Version parsedVersion) {
        this.parsedVersion = parsedVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("windowsUpdate")
    public WindowsUpdate windowsUpdate;
    public UpgradeOccurrence withWindowsUpdate(WindowsUpdate windowsUpdate) {
        this.windowsUpdate = windowsUpdate;
        return this;
    }
}