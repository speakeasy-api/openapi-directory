package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PackageRepository
 * A package repository.
**/
public class PackageRepository {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apt")
    public AptRepository apt;
    public PackageRepository withApt(AptRepository apt) {
        this.apt = apt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("goo")
    public GooRepository goo;
    public PackageRepository withGoo(GooRepository goo) {
        this.goo = goo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yum")
    public YumRepository yum;
    public PackageRepository withYum(YumRepository yum) {
        this.yum = yum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zypper")
    public ZypperRepository zypper;
    public PackageRepository withZypper(ZypperRepository zypper) {
        this.zypper = zypper;
        return this;
    }
}