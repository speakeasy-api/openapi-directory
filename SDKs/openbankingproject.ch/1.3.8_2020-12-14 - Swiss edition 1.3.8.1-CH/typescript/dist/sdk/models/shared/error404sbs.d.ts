import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode404SBSEnum } from "./messagecode404sbsenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
 */
export declare class Error404SBSAdditionalErrors extends SpeakeasyBase {
    /**
     * Message codes defined for signing baskets for HTTP Error code 404 (NOT FOUND).
     */
    code: MessageCode404SBSEnum;
    /**
     * Detailed human readable text specific to this instance of the error.
     *
     * @remarks
     * XPath might be used to point to the issue generating the error in addition.
     * Remark for Future: In future, a dedicated field might be introduced for the XPath.
     *
     */
    detail?: string;
    /**
     * Short human readable description of error type.
     *
     * @remarks
     * Could be in local language.
     * To be provided by ASPSPs.
     *
     */
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 *
 * @remarks
 * in case of a HTTP error code 404 for signing baskets.
 *
 */
export declare class Error404SBS extends SpeakeasyBase {
    /**
     * A _link object with all availabel link types.
     *
     * @remarks
     *
     */
    links?: Record<string, HrefType>;
    /**
     * Array of Error Information Blocks.
     *
     * @remarks
     *
     * Might be used if more than one error is to be communicated
     *
     */
    additionalErrors?: Error404SBSAdditionalErrors[];
    /**
     * Message codes defined for signing baskets for HTTP Error code 404 (NOT FOUND).
     */
    code: MessageCode404SBSEnum;
    /**
     * Detailed human readable text specific to this instance of the error.
     *
     * @remarks
     * XPath might be used to point to the issue generating the error in addition.
     * Remark for Future: In future, a dedicated field might be introduced for the XPath.
     *
     */
    detail?: string;
    /**
     * Short human readable description of error type.
     *
     * @remarks
     * Could be in local language.
     * To be provided by ASPSPs.
     *
     */
    title?: string;
    /**
     * A URI reference [RFC3986] that identifies the problem type.
     *
     * @remarks
     * Remark For Future: These URI will be provided by NextGen in future.
     *
     */
    type: string;
}
