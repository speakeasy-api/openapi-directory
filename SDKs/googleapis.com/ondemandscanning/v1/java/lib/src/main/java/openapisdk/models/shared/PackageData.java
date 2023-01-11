package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PackageData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpeUri")
    public String cpeUri;
    public PackageData withCpeUri(String cpeUri) {
        this.cpeUri = cpeUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dependencyChain")
    public LanguagePackageDependency[] dependencyChain;
    public PackageData withDependencyChain(LanguagePackageDependency[] dependencyChain) {
        this.dependencyChain = dependencyChain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileLocation")
    public FileLocation[] fileLocation;
    public PackageData withFileLocation(FileLocation[] fileLocation) {
        this.fileLocation = fileLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hashDigest")
    public String hashDigest;
    public PackageData withHashDigest(String hashDigest) {
        this.hashDigest = hashDigest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("os")
    public String os;
    public PackageData withOs(String os) {
        this.os = os;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osVersion")
    public String osVersion;
    public PackageData withOsVersion(String osVersion) {
        this.osVersion = osVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("package")
    public String package_;
    public PackageData withPackage(String package_) {
        this.package_ = package_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageType")
    public PackageDataPackageTypeEnum packageType;
    public PackageData withPackageType(PackageDataPackageTypeEnum packageType) {
        this.packageType = packageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patchedCve")
    public String[] patchedCve;
    public PackageData withPatchedCve(String[] patchedCve) {
        this.patchedCve = patchedCve;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unused")
    public String unused;
    public PackageData withUnused(String unused) {
        this.unused = unused;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public PackageData withVersion(String version) {
        this.version = version;
        return this;
    }
}