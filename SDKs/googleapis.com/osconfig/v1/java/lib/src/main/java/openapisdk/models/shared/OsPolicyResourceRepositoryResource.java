package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourceRepositoryResource
 * A resource that manages a package repository.
**/
public class OsPolicyResourceRepositoryResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apt")
    public OsPolicyResourceRepositoryResourceAptRepository apt;
    public OsPolicyResourceRepositoryResource withApt(OsPolicyResourceRepositoryResourceAptRepository apt) {
        this.apt = apt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goo")
    public OsPolicyResourceRepositoryResourceGooRepository goo;
    public OsPolicyResourceRepositoryResource withGoo(OsPolicyResourceRepositoryResourceGooRepository goo) {
        this.goo = goo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yum")
    public OsPolicyResourceRepositoryResourceYumRepository yum;
    public OsPolicyResourceRepositoryResource withYum(OsPolicyResourceRepositoryResourceYumRepository yum) {
        this.yum = yum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zypper")
    public OsPolicyResourceRepositoryResourceZypperRepository zypper;
    public OsPolicyResourceRepositoryResource withZypper(OsPolicyResourceRepositoryResourceZypperRepository zypper) {
        this.zypper = zypper;
        return this;
    }
}