import { SpeakeasyBase } from "../../../internal/utils";
import { UpsInvoice } from "./upsinvoice";
/**
 * A UPS account information request body
 */
export declare class ConnectUpsRequestBody extends SpeakeasyBase {
    /**
     * Account country code
     */
    accountCountryCode: string;
    /**
     * Account number
     */
    accountNumber: string;
    /**
     * Account postal code
     */
    accountPostalCode: string;
    /**
     * Address Line 1
     */
    address1: string;
    /**
     * Address Line 2
     */
    address2?: string;
    /**
     * The Agreement to the [UPS Technology Agreement](https://www.ups.com/assets/resources/media/UTA_with_EUR.pdf)
     */
    agreeToTechnologyAgreement: boolean;
    /**
     * City
     */
    city: string;
    /**
     * Company
     */
    company: string;
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
     * The UPS invoice
     */
    invoice?: UpsInvoice;
    /**
     * The invoice amount
     */
    invoiceAmount?: number;
    /**
     * The invoice currency code
     */
    invoiceCurrencyCode?: string;
    /**
     * Last name
     */
    lastName: string;
    /**
     * Nickname
     */
    nickname: string;
    /**
     * Phone
     */
    phone: string;
    /**
     * Postal code
     */
    postalCode: string;
    /**
     * State
     */
    state: string;
    /**
     * Title
     */
    title?: string;
}
