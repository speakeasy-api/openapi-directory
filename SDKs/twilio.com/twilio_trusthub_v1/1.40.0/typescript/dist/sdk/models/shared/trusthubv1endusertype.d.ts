import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class TrusthubV1EndUserType extends SpeakeasyBase {
    /**
     * The required information for creating an End-User. The required fields will change as regulatory needs change and will differ for businesses and individuals.
     */
    fields?: any[];
    /**
     * A human-readable description that is assigned to describe the End-User Type resource. Examples can include first name, last name, email, business name, etc
     */
    friendlyName?: string;
    /**
     * A machine-readable description of the End-User Type resource. Examples can include first_name, last_name, email, business_name, etc.
     */
    machineName?: string;
    /**
     * The unique string that identifies the End-User Type resource.
     */
    sid?: string;
    /**
     * The absolute URL of the End-User Type resource.
     */
    url?: string;
}
