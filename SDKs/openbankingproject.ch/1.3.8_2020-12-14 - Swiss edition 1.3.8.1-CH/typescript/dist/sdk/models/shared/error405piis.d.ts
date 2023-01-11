import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode405PiisEnum } from "./messagecode405piisenum";
import { HrefType } from "./hreftype";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error405PiisAdditionalErrors extends SpeakeasyBase {
    code: MessageCode405PiisEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 405 for PIIS.
 *
**/
export declare class Error405Piis extends SpeakeasyBase {
    links?: Record<string, HrefType>;
    additionalErrors?: Error405PiisAdditionalErrors[];
    code: MessageCode405PiisEnum;
    detail?: string;
    title?: string;
    type: string;
}
