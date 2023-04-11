import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Fedex UK account information request body
 */
export declare class ConnectFedexUkRequestBody extends SpeakeasyBase {
    /**
     * Account number
     */
    accountNumber: string;
    /**
     * Address
     */
    address1: string;
    /**
     * Address
     */
    address2?: string;
    /**
     * Boolean signaling agreement to the Fedex End User License Agreement
     */
    agreeToEula: boolean;
    /**
     * The city
     */
    city: string;
    /**
     * The company
     */
    company?: string;
    /**
     * Country code
     */
    countryCode: string;
    /**
     * The email address
     */
    email: string;
    /**
     * First name
     */
    firstName: string;
    /**
     * Last name
     */
    lastName: string;
    /**
     * Meter number
     */
    meterNumber?: string;
    /**
     * Nickname
     */
    nickname: string;
    /**
     * Phone number
     */
    phone: string;
    /**
     * Postal Code
     */
    postalCode: string;
    /**
     * State
     */
    state: string;
}
