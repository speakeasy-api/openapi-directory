/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EffectiveGuestPolicySourcedSoftwareRecipe - A guest policy recipe including its source.
 */
public class EffectiveGuestPolicySourcedSoftwareRecipe {
    /**
     * A software recipe is a set of instructions for installing and configuring a piece of software. It consists of a set of artifacts that are downloaded, and a set of steps that install, configure, and/or update the software. Recipes support installing and updating software from artifacts in the following formats: Zip archive, Tar archive, Windows MSI, Debian package, and RPM package. Additionally, recipes support executing a script (either defined in a file or directly in this api) in bash, sh, cmd, and powershell. Updating a software recipe If a recipe is assigned to an instance and there is a recipe with the same name but a lower version already installed and the assigned state of the recipe is `UPDATED`, then the recipe is updated to the new version. Script Working Directories Each script or execution step is run in its own temporary directory which is deleted after completing the step.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softwareRecipe")
    public SoftwareRecipe softwareRecipe;

    public EffectiveGuestPolicySourcedSoftwareRecipe withSoftwareRecipe(SoftwareRecipe softwareRecipe) {
        this.softwareRecipe = softwareRecipe;
        return this;
    }
    
    /**
     * Name of the guest policy providing this config.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;

    public EffectiveGuestPolicySourcedSoftwareRecipe withSource(String source) {
        this.source = source;
        return this;
    }
    
    public EffectiveGuestPolicySourcedSoftwareRecipe(){}
}
