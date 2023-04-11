import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class PreviewDeployedDevicesFleetDeployment extends SpeakeasyBase {
    /**
     * Specifies the unique string identifier of the Account responsible for this Deployment.
     */
    accountSid?: string;
    /**
     * Specifies the date this Deployment was created, given in UTC ISO 8601 format.
     */
    dateCreated?: Date;
    /**
     * Specifies the date this Deployment was last updated, given in UTC ISO 8601 format.
     */
    dateUpdated?: Date;
    /**
     * Specifies the unique string identifier of the Fleet that the given Deployment belongs to.
     */
    fleetSid?: string;
    /**
     * Contains a human readable descriptive text for this Deployment, up to 64 characters long
     */
    friendlyName?: string;
    /**
     * Contains a 34 character string that uniquely identifies this Deployment resource.
     */
    sid?: string;
    /**
     * Specifies the unique string identifier of the Twilio Sync service instance linked to and accessible by this Deployment.
     */
    syncServiceSid?: string;
    /**
     * Contains an absolute URL for this Deployment resource.
     */
    url?: string;
}
