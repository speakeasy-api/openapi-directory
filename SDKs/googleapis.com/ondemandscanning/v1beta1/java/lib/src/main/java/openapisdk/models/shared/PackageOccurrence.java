package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PackageOccurrence
 * Details on how a particular software package was installed on a system.
**/
public class PackageOccurrence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("architecture")
    public PackageOccurrenceArchitectureEnum architecture;
    public PackageOccurrence withArchitecture(PackageOccurrenceArchitectureEnum architecture) {
        this.architecture = architecture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpeUri")
    public String cpeUri;
    public PackageOccurrence withCpeUri(String cpeUri) {
        this.cpeUri = cpeUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public License license;
    public PackageOccurrence withLicense(License license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location[] location;
    public PackageOccurrence withLocation(Location[] location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PackageOccurrence withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageType")
    public String packageType;
    public PackageOccurrence withPackageType(String packageType) {
        this.packageType = packageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Version version;
    public PackageOccurrence withVersion(Version version) {
        this.version = version;
        return this;
    }
}