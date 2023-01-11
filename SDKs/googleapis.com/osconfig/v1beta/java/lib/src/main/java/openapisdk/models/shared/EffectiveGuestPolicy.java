package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EffectiveGuestPolicy
 * The effective guest policy that applies to a VM instance.
**/
public class EffectiveGuestPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageRepositories")
    public EffectiveGuestPolicySourcedPackageRepository[] packageRepositories;
    public EffectiveGuestPolicy withPackageRepositories(EffectiveGuestPolicySourcedPackageRepository[] packageRepositories) {
        this.packageRepositories = packageRepositories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packages")
    public EffectiveGuestPolicySourcedPackage[] packages;
    public EffectiveGuestPolicy withPackages(EffectiveGuestPolicySourcedPackage[] packages) {
        this.packages = packages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softwareRecipes")
    public EffectiveGuestPolicySourcedSoftwareRecipe[] softwareRecipes;
    public EffectiveGuestPolicy withSoftwareRecipes(EffectiveGuestPolicySourcedSoftwareRecipe[] softwareRecipes) {
        this.softwareRecipes = softwareRecipes;
        return this;
    }
}