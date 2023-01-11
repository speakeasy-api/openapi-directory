import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Fedex UK account information request body
**/
export declare class ConnectFedexUkRequestBody extends SpeakeasyBase {
    accountNumber: string;
    address1: string;
    address2?: string;
    agreeToEula: boolean;
    city: string;
    company?: string;
    countryCode: string;
    email: string;
    firstName: string;
    lastName: string;
    meterNumber?: string;
    nickname: string;
    phone: string;
    postalCode: string;
    state: string;
}
