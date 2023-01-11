import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Royal Mail account information request body
**/
export declare class ConnectRoyalMailRequestBody extends SpeakeasyBase {
    accountNumber: string;
    city: string;
    companyName?: string;
    contactName: string;
    email?: string;
    nickname: string;
    obaEmail?: string;
    phone?: string;
    postalCode: string;
    streetLine1?: string;
    streetLine2?: string;
    streetLine3?: string;
}
