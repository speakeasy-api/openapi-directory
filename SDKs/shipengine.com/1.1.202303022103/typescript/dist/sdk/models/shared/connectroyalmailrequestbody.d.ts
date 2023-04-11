import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Royal Mail account information request body
 */
export declare class ConnectRoyalMailRequestBody extends SpeakeasyBase {
    /**
     * Account number
     */
    accountNumber: string;
    /**
     * City
     */
    city: string;
    /**
     * Company name
     */
    companyName?: string;
    /**
     * Contact name
     */
    contactName: string;
    /**
     * The email address
     */
    email?: string;
    /**
     * Nickname
     */
    nickname: string;
    /**
     * The oba email address
     */
    obaEmail?: string;
    /**
     * Phone
     */
    phone?: string;
    /**
     * Postal code
     */
    postalCode: string;
    /**
     * Street line1
     */
    streetLine1?: string;
    /**
     * Street line2
     */
    streetLine2?: string;
    /**
     * Street line3
     */
    streetLine3?: string;
}
