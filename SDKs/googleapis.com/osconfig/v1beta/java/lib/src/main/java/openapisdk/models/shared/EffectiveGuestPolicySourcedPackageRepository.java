package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EffectiveGuestPolicySourcedPackageRepository
 * A guest policy package repository including its source.
**/
public class EffectiveGuestPolicySourcedPackageRepository {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageRepository")
    public PackageRepository packageRepository;
    public EffectiveGuestPolicySourcedPackageRepository withPackageRepository(PackageRepository packageRepository) {
        this.packageRepository = packageRepository;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public EffectiveGuestPolicySourcedPackageRepository withSource(String source) {
        this.source = source;
        return this;
    }
}