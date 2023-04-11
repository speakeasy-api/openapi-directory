import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateContact extends SpeakeasyBase {
    /**
     * Email address of requestor contact
     */
    email: string;
    /**
     * Only used for EVSSL. Job title of requestor contact
     */
    jobTitle?: string;
    /**
     * First name of requestor contact
     */
    nameFirst: string;
    /**
     * Last name of requestor contact
     */
    nameLast: string;
    /**
     * Middle initial of requestor contact
     */
    nameMiddle?: string;
    /**
     * Phone number for requestor contact
     */
    phone: string;
    /**
     * Suffix of requestor contact
     */
    suffix?: string;
}
