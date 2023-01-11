package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GuestPolicyInput
 * An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.
**/
public class GuestPolicyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignment")
    public Assignment assignment;
    public GuestPolicyInput withAssignment(Assignment assignment) {
        this.assignment = assignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GuestPolicyInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GuestPolicyInput withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GuestPolicyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageRepositories")
    public PackageRepository[] packageRepositories;
    public GuestPolicyInput withPackageRepositories(PackageRepository[] packageRepositories) {
        this.packageRepositories = packageRepositories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packages")
    public Package[] packages;
    public GuestPolicyInput withPackages(Package[] packages) {
        this.packages = packages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipes")
    public SoftwareRecipe[] recipes;
    public GuestPolicyInput withRecipes(SoftwareRecipe[] recipes) {
        this.recipes = recipes;
        return this;
    }
}