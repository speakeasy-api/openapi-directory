import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
/**
 * Order disbursement. All methods require the payment analyst role.
 */
export declare class OrderReportDisbursement extends SpeakeasyBase {
    disbursementAmount?: Price;
    /**
     * The disbursement date, in ISO 8601 format.
     */
    disbursementCreationDate?: string;
    /**
     * The date the disbursement was initiated, in ISO 8601 format.
     */
    disbursementDate?: string;
    /**
     * The ID of the disbursement.
     */
    disbursementId?: string;
    /**
     * The ID of the managing account.
     */
    merchantId?: string;
}
