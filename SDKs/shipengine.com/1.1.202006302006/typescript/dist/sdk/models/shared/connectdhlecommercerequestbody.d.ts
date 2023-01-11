import { SpeakeasyBase } from "../../../internal/utils";
import { AncillaryServiceEndorsementEnum } from "./ancillaryserviceendorsementenum";
/**
 * A DHL Ecommerce account information request body
**/
export declare class ConnectDhlEcommerceRequestBody extends SpeakeasyBase {
    accountNumber?: string;
    ancillaryEndorsement?: AncillaryServiceEndorsementEnum;
    apiKey?: string;
    apiSecret?: string;
    clientId: string;
    distributionCenter: string;
    ftpPassword?: string;
    ftpUsername?: string;
    nickname: string;
    password: string;
    pickupNumber: string;
    username: string;
}
