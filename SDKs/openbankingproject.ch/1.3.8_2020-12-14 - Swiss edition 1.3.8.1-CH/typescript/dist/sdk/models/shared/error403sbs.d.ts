import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode403SbsEnum } from "./messagecode403sbsenum";
import { HrefType } from "./hreftype";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error403SbsAdditionalErrors extends SpeakeasyBase {
    code: MessageCode403SbsEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 403 for signing baskets.
 *
**/
export declare class Error403Sbs extends SpeakeasyBase {
    links?: Record<string, HrefType>;
    additionalErrors?: Error403SbsAdditionalErrors[];
    code: MessageCode403SbsEnum;
    detail?: string;
    title?: string;
    type: string;
}
