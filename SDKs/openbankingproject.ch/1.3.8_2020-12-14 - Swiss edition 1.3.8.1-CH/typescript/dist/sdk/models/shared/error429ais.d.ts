import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode429AisEnum } from "./messagecode429aisenum";
import { HrefType } from "./hreftype";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807]
 * in case of a HTTP error code 429 for.
 *
**/
export declare class Error429AisAdditionalErrors extends SpeakeasyBase {
    code: MessageCode429AisEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 429 for AIS.
 *
**/
export declare class Error429Ais extends SpeakeasyBase {
    links?: Record<string, HrefType>;
    additionalErrors?: Error429AisAdditionalErrors[];
    code: MessageCode429AisEnum;
    detail?: string;
    title?: string;
    type: string;
}
