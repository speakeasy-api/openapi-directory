import { SpeakeasyBase } from "../../../internal/utils";
/**
 * VmwareSourceDetails message describes a specific source details for the vmware source type.
 */
export declare class VmwareSourceDetails extends SpeakeasyBase {
    /**
     * Input only. The credentials password. This is write only and can not be read in a GET operation.
     */
    password?: string;
    /**
     * The thumbprint representing the certificate for the vcenter.
     */
    thumbprint?: string;
    /**
     * The credentials username.
     */
    username?: string;
    /**
     * The ip address of the vcenter this Source represents.
     */
    vcenterIp?: string;
}
