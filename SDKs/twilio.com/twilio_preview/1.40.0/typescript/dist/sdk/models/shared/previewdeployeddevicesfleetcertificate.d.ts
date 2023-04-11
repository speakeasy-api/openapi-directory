import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class PreviewDeployedDevicesFleetCertificate extends SpeakeasyBase {
    /**
     * Specifies the unique string identifier of the Account responsible for this Certificate credential.
     */
    accountSid?: string;
    /**
     * Specifies the date this Certificate credential was created, given in UTC ISO 8601 format.
     */
    dateCreated?: Date;
    /**
     * Specifies the date this Certificate credential was last updated, given in UTC ISO 8601 format.
     */
    dateUpdated?: Date;
    /**
     * Specifies the unique string identifier of a Device authenticated with this Certificate credential.
     */
    deviceSid?: string;
    /**
     * Specifies the unique string identifier of the Fleet that the given Certificate credential belongs to.
     */
    fleetSid?: string;
    /**
     * Contains a human readable descriptive text for this Certificate credential, up to 256 characters long.
     */
    friendlyName?: string;
    /**
     * Contains a 34 character string that uniquely identifies this Certificate credential resource.
     */
    sid?: string;
    /**
     * Contains a unique hash of the payload of this Certificate credential, used to authenticate the Device.
     */
    thumbprint?: string;
    /**
     * Contains an absolute URL for this Certificate credential resource.
     */
    url?: string;
}
