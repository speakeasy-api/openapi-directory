import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class PreviewDeployedDevicesFleet extends SpeakeasyBase {
    /**
     * Speicifies the unique string identifier of the Account responsible for this Fleet.
     */
    accountSid?: string;
    /**
     * Specifies the date this Fleet was created, given in UTC ISO 8601 format.
     */
    dateCreated?: Date;
    /**
     * Specifies the date this Fleet was last updated, given in UTC ISO 8601 format.
     */
    dateUpdated?: Date;
    /**
     * Contains the string identifier of the automatically provisioned default Deployment of this Fleet.
     */
    defaultDeploymentSid?: string;
    /**
     * Contains a human readable descriptive text for this Fleet, up to 256 characters long.
     */
    friendlyName?: string;
    /**
     * Contains a dictionary of URL links to nested resources of this Fleet.
     */
    links?: Record<string, any>;
    /**
     * Contains a 34 character string that uniquely identifies this Fleet resource.
     */
    sid?: string;
    /**
     * Contains a unique and addressable name of this Fleet, e.g. 'default', up to 128 characters long.
     */
    uniqueName?: string;
    /**
     * Contains an absolute URL for this Fleet resource.
     */
    url?: string;
}
