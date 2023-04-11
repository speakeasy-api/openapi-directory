import { SpeakeasyBase } from "../../../internal/utils";
/**
 * AWS EC2 specific details.
 */
export declare class AwsEc2PlatformDetails extends SpeakeasyBase {
    /**
     * The location of the machine in the AWS format.
     */
    location?: string;
    /**
     * AWS platform's machine type label.
     */
    machineTypeLabel?: string;
}
