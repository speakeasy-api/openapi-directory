import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request was successful
 */
export declare class Shopper extends SpeakeasyBase {
    /**
     * Identifier for the Customer record associated with this Shopper record. This is an alternate identifier that some systems use to identify an individual shopper record
     */
    customerId?: string;
    email: string;
    externalId?: number;
    marketId: string;
    nameFirst: string;
    nameLast: string;
    shopperId: string;
}
