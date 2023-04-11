import { SpeakeasyBase } from "../../../internal/utils";
import { EffectiveGuestPolicySourcedPackage } from "./effectiveguestpolicysourcedpackage";
import { EffectiveGuestPolicySourcedPackageRepository } from "./effectiveguestpolicysourcedpackagerepository";
import { EffectiveGuestPolicySourcedSoftwareRecipe } from "./effectiveguestpolicysourcedsoftwarerecipe";
/**
 * The effective guest policy that applies to a VM instance.
 */
export declare class EffectiveGuestPolicy extends SpeakeasyBase {
    /**
     * List of package repository configurations assigned to the VM instance.
     */
    packageRepositories?: EffectiveGuestPolicySourcedPackageRepository[];
    /**
     * List of package configurations assigned to the VM instance.
     */
    packages?: EffectiveGuestPolicySourcedPackage[];
    /**
     * List of recipes assigned to the VM instance.
     */
    softwareRecipes?: EffectiveGuestPolicySourcedSoftwareRecipe[];
}
