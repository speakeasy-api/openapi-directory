package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GuestPolicy
 * An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.
**/
public class GuestPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignment")
    public Assignment assignment;
    public GuestPolicy withAssignment(Assignment assignment) {
        this.assignment = assignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GuestPolicy withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GuestPolicy withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GuestPolicy withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GuestPolicy withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageRepositories")
    public PackageRepository[] packageRepositories;
    public GuestPolicy withPackageRepositories(PackageRepository[] packageRepositories) {
        this.packageRepositories = packageRepositories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packages")
    public Package[] packages;
    public GuestPolicy withPackages(Package[] packages) {
        this.packages = packages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipes")
    public SoftwareRecipe[] recipes;
    public GuestPolicy withRecipes(SoftwareRecipe[] recipes) {
        this.recipes = recipes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GuestPolicy withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}