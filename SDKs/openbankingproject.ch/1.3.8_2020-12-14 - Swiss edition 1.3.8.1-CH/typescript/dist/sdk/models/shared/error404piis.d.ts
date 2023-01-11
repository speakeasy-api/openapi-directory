import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode404PiisEnum } from "./messagecode404piisenum";
import { HrefType } from "./hreftype";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error404PiisAdditionalErrors extends SpeakeasyBase {
    code: MessageCode404PiisEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 404 for PIIS.
 *
**/
export declare class Error404Piis extends SpeakeasyBase {
    links?: Record<string, HrefType>;
    additionalErrors?: Error404PiisAdditionalErrors[];
    code: MessageCode404PiisEnum;
    detail?: string;
    title?: string;
    type: string;
}
