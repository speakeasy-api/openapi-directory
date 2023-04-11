import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class PreviewDeployedDevicesFleetKey extends SpeakeasyBase {
    /**
     * Specifies the unique string identifier of the Account responsible for this Key credential.
     */
    accountSid?: string;
    /**
     * Specifies the date this Key credential was created, given in UTC ISO 8601 format.
     */
    dateCreated?: Date;
    /**
     * Specifies the date this Key credential was last updated, given in UTC ISO 8601 format.
     */
    dateUpdated?: Date;
    /**
     * Specifies the unique string identifier of a Device authenticated with this Key credential.
     */
    deviceSid?: string;
    /**
     * Specifies the unique string identifier of the Fleet that the given Key credential belongs to.
     */
    fleetSid?: string;
    /**
     * Contains a human readable descriptive text for this Key credential, up to 256 characters long.
     */
    friendlyName?: string;
    /**
     * Contains the automatically generated secret belonging to this Key credential, used to authenticate the Device.
     */
    secret?: string;
    /**
     * Contains a 34 character string that uniquely identifies this Key credential resource.
     */
    sid?: string;
    /**
     * Contains an absolute URL for this Key credential resource.
     */
    url?: string;
}
