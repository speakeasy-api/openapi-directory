import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class PreviewDeployedDevicesFleetDevice extends SpeakeasyBase {
    /**
     * Specifies the unique string identifier of the Account responsible for this Device.
     */
    accountSid?: string;
    /**
     * Specifies the date this Device was last authenticated, given in UTC ISO 8601 format.
     */
    dateAuthenticated?: Date;
    /**
     * Specifies the date this Device was created, given in UTC ISO 8601 format.
     */
    dateCreated?: Date;
    /**
     * Specifies the date this Device was last updated, given in UTC ISO 8601 format.
     */
    dateUpdated?: Date;
    /**
     * Specifies the unique string identifier of the Deployment group that this Device is associated with.
     */
    deploymentSid?: string;
    /**
     * Contains a boolean flag indicating whether the device is enabled or not, blocks device connectivity if set to false.
     */
    enabled?: boolean;
    /**
     * Specifies the unique string identifier of the Fleet that the given Device belongs to.
     */
    fleetSid?: string;
    /**
     * Contains a human readable descriptive text for this Device, up to 256 characters long
     */
    friendlyName?: string;
    /**
     * Contains an arbitrary string identifier representing a human user associated with this Device, assigned by the developer, up to 256 characters long.
     */
    identity?: string;
    /**
     * Contains a 34 character string that uniquely identifies this Device resource.
     */
    sid?: string;
    /**
     * Contains a unique and addressable name of this Device, assigned by the developer, up to 128 characters long.
     */
    uniqueName?: string;
    /**
     * Contains an absolute URL for this Device resource.
     */
    url?: string;
}
