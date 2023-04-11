import { SpeakeasyBase } from "../../../internal/utils";
import { CoverageValueWriteV1 } from "./coveragevaluewritev1";
import { FileMiniV1 } from "./fileminiv1";
import { QuotePriceV1 } from "./quotepricev1";
import { StatusReason } from "./statusreason";
/**
 * Describes whether bind is supported for the quote. Policies can only be created from quotes with bind_status of "ready".
 */
export declare enum QuoteV1BindStatusEnum {
    Ready = "ready",
    Unavailable = "unavailable",
    Requested = "requested"
}
/**
 * Indicates the status of a quote. See [full list of quote statuses](https://www.heraldapi.com/docs/quotes) for more detail.
 */
export declare enum QuoteV1StatusEnum {
    Pending = "pending",
    Referral = "referral",
    Referred = "referred",
    Declined = "declined",
    Active = "active",
    Expired = "expired",
    Unresponsive = "unresponsive"
}
/**
 * A quote declares an institution's willingness to sell an insurance policy to a customer. Active quotes contain details about a policy the customer can purchase and related prices.
 *
 * @remarks
 *
 * Read more about [quotes](https://www.heraldapi.com/docs/quotes).
 */
export declare class QuoteV1 extends SpeakeasyBase {
    /**
     * Describes whether bind is supported for the quote. Policies can only be created from quotes with bind_status of "ready".
     */
    bindStatus: QuoteV1BindStatusEnum;
    coverageValues?: CoverageValueWriteV1[];
    /**
     * An array of relevant files, which can be retrieved using [`/files/{file_id}/get_temporary_link`](../reference/HeraldAPI.v1.yaml/paths/~1files~1{file_id}~1get_temporary_link/post). This array is empty if there are no relevant files.
     */
    files?: FileMiniV1[];
    /**
     * id for a specific quote.
     */
    id: string;
    /**
     * Identifies the National Association of Insurance Commissioners (NAIC) code associated with the quoted policy. The field is NULL if this information is not available.
     */
    naicCode?: string;
    /**
     * A hyperlink to a corresponding record in the institution’s portal. This field is NULL if not available.
     */
    portalLink?: string;
    /**
     * These prices describe the costs associated with a quote.
     */
    prices?: QuotePriceV1;
    productId: string;
    /**
     * Indicates the status of a quote. See [full list of quote statuses](https://www.heraldapi.com/docs/quotes) for more detail.
     */
    status: QuoteV1StatusEnum;
    /**
     * This will be returned when the status is declined, referred, or unsupported. When the source is "Carrier" the status reason is from the integrated carrier. When the source is "API", the reason has been cleaned by Herald.
     */
    statusReasons?: StatusReason;
    /**
     * id of the submission that created the quote.
     */
    submissionId: string;
}
