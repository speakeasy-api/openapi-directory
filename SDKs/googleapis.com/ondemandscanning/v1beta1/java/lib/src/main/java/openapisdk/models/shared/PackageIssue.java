package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PackageIssue
 * A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).
**/
public class PackageIssue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("affectedCpeUri")
    public String affectedCpeUri;
    public PackageIssue withAffectedCpeUri(String affectedCpeUri) {
        this.affectedCpeUri = affectedCpeUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("affectedPackage")
    public String affectedPackage;
    public PackageIssue withAffectedPackage(String affectedPackage) {
        this.affectedPackage = affectedPackage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("affectedVersion")
    public Version affectedVersion;
    public PackageIssue withAffectedVersion(Version affectedVersion) {
        this.affectedVersion = affectedVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveSeverity")
    public PackageIssueEffectiveSeverityEnum effectiveSeverity;
    public PackageIssue withEffectiveSeverity(PackageIssueEffectiveSeverityEnum effectiveSeverity) {
        this.effectiveSeverity = effectiveSeverity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileLocation")
    public GrafeasV1FileLocation[] fileLocation;
    public PackageIssue withFileLocation(GrafeasV1FileLocation[] fileLocation) {
        this.fileLocation = fileLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixAvailable")
    public Boolean fixAvailable;
    public PackageIssue withFixAvailable(Boolean fixAvailable) {
        this.fixAvailable = fixAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedCpeUri")
    public String fixedCpeUri;
    public PackageIssue withFixedCpeUri(String fixedCpeUri) {
        this.fixedCpeUri = fixedCpeUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedPackage")
    public String fixedPackage;
    public PackageIssue withFixedPackage(String fixedPackage) {
        this.fixedPackage = fixedPackage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedVersion")
    public Version fixedVersion;
    public PackageIssue withFixedVersion(Version fixedVersion) {
        this.fixedVersion = fixedVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageType")
    public String packageType;
    public PackageIssue withPackageType(String packageType) {
        this.packageType = packageType;
        return this;
    }
}