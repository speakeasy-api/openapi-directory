import { SpeakeasyBase } from "../../../internal/utils";
import { AncillaryServiceEndorsementEnum } from "./ancillaryserviceendorsementenum";
/**
 * A DHL Ecommerce account information request body
 */
export declare class ConnectDhlEcommerceRequestBody extends SpeakeasyBase {
    /**
     * Account number
     */
    accountNumber?: string;
    ancillaryEndorsement?: AncillaryServiceEndorsementEnum;
    /**
     * The DHL E-Commerce API key. This field is optional, but if not set you will not be able to get rates for this account.
     *
     * @remarks
     *
     */
    apiKey?: string;
    /**
     * The DHL E-Commerce API secret. This field is optional, but if not set you will not be able to get rates for this account.
     *
     * @remarks
     *
     */
    apiSecret?: string;
    /**
     * The client id
     */
    clientId: string;
    /**
     * The distribution center
     */
    distributionCenter: string;
    /**
     * FTP password
     */
    ftpPassword?: string;
    /**
     * FTP username
     */
    ftpUsername?: string;
    /**
     * A nickname to help you identify this account
     */
    nickname: string;
    /**
     * The account password
     */
    password: string;
    /**
     * The pickup number
     */
    pickupNumber: string;
    registrationId?: string;
    softwareName?: string;
    /**
     * Sold To field
     */
    soldTo?: string;
    /**
     * The account username
     */
    username: string;
}
