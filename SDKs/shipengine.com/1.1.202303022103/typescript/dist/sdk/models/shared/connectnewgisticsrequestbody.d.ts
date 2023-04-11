import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Newgistics account information request body
 */
export declare class ConnectNewgisticsRequestBody extends SpeakeasyBase {
    /**
     * Induction site
     */
    inductionSite: string;
    /**
     * Mailer id
     */
    mailerId?: number;
    /**
     * Merchant id
     */
    merchantId?: number;
    /**
     * Nickname
     */
    nickname: string;
}
