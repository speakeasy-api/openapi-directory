package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourcePackageResource
 * A resource that manages a system package.
**/
public class OsPolicyResourcePackageResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apt")
    public OsPolicyResourcePackageResourceApt apt;
    public OsPolicyResourcePackageResource withApt(OsPolicyResourcePackageResourceApt apt) {
        this.apt = apt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deb")
    public OsPolicyResourcePackageResourceDeb deb;
    public OsPolicyResourcePackageResource withDeb(OsPolicyResourcePackageResourceDeb deb) {
        this.deb = deb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desiredState")
    public OsPolicyResourcePackageResourceDesiredStateEnum desiredState;
    public OsPolicyResourcePackageResource withDesiredState(OsPolicyResourcePackageResourceDesiredStateEnum desiredState) {
        this.desiredState = desiredState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googet")
    public OsPolicyResourcePackageResourceGooGet googet;
    public OsPolicyResourcePackageResource withGooget(OsPolicyResourcePackageResourceGooGet googet) {
        this.googet = googet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("msi")
    public OsPolicyResourcePackageResourceMsi msi;
    public OsPolicyResourcePackageResource withMsi(OsPolicyResourcePackageResourceMsi msi) {
        this.msi = msi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rpm")
    public OsPolicyResourcePackageResourceRpm rpm;
    public OsPolicyResourcePackageResource withRpm(OsPolicyResourcePackageResourceRpm rpm) {
        this.rpm = rpm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yum")
    public OsPolicyResourcePackageResourceYum yum;
    public OsPolicyResourcePackageResource withYum(OsPolicyResourcePackageResourceYum yum) {
        this.yum = yum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zypper")
    public OsPolicyResourcePackageResourceZypper zypper;
    public OsPolicyResourcePackageResource withZypper(OsPolicyResourcePackageResourceZypper zypper) {
        this.zypper = zypper;
        return this;
    }
}