import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode409PiisEnum } from "./messagecode409piisenum";
import { HrefType } from "./hreftype";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error409PiisAdditionalErrors extends SpeakeasyBase {
    code: MessageCode409PiisEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 409 for PIIS.
 *
**/
export declare class Error409Piis extends SpeakeasyBase {
    links?: Record<string, HrefType>;
    additionalErrors?: Error409PiisAdditionalErrors[];
    code: MessageCode409PiisEnum;
    detail?: string;
    title?: string;
    type: string;
}
