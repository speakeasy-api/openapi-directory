import { SpeakeasyBase } from "../../../internal/utils";
import { UpsInvoice } from "./upsinvoice";
/**
 * A UPS account information request body
**/
export declare class ConnectUpsRequestBody extends SpeakeasyBase {
    accountCountryCode: string;
    accountNumber: string;
    accountPostalCode: string;
    address1: string;
    address2?: string;
    agreeToTechnologyAgreement: boolean;
    city: string;
    company: string;
    countryCode: string;
    email: string;
    firstName: string;
    invoice?: UpsInvoice;
    lastName: string;
    nickname: string;
    phone: string;
    postalCode: string;
    state: string;
    title?: string;
}
