import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Azure VM specific details.
 */
export declare class AzureVmPlatformDetails extends SpeakeasyBase {
    /**
     * The location of the machine in the Azure format.
     */
    location?: string;
    /**
     * Azure platform's machine type label.
     */
    machineTypeLabel?: string;
    /**
     * Azure platform's provisioning state.
     */
    provisioningState?: string;
}
