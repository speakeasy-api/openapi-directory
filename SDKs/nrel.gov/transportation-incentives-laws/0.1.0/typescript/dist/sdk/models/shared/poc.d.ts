import { SpeakeasyBase } from "../../../internal/utils";
export declare class Poc extends SpeakeasyBase {
    /**
     * The agency that the contact represents
     */
    agency?: string;
    /**
     * The contacts email address
     */
    email?: string;
    /**
     * The contacts fax number
     */
    fax?: string;
    /**
     * The name of the contact
     */
    name: string;
    /**
     * The state in which the contact is based ('US' for Federal laws and 'DC' for the District of Columbia)
     */
    state: string;
    /**
     * The contacts phone number
     */
    telephone?: string;
    /**
     * The job title of the contact
     */
    title?: string;
    /**
     * The contacts webpage
     */
    webPage?: string;
}
