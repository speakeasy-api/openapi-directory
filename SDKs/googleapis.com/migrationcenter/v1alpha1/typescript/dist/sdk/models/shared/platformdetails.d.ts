import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2PlatformDetails } from "./awsec2platformdetails";
import { AzureVmPlatformDetails } from "./azurevmplatformdetails";
import { GenericPlatformDetails } from "./genericplatformdetails";
import { PhysicalPlatformDetails } from "./physicalplatformdetails";
import { VmwarePlatformDetails } from "./vmwareplatformdetails";
/**
 * Information about the platform.
 */
export declare class PlatformDetails extends SpeakeasyBase {
    /**
     * AWS EC2 specific details.
     */
    awsEc2Details?: AwsEc2PlatformDetails;
    /**
     * Azure VM specific details.
     */
    azureVmDetails?: AzureVmPlatformDetails;
    /**
     * Generic platform details.
     */
    genericDetails?: GenericPlatformDetails;
    /**
     * Platform specific details for Physical Machines.
     */
    physicalDetails?: PhysicalPlatformDetails;
    /**
     * VMware specific details.
     */
    vmwareDetails?: VmwarePlatformDetails;
}
