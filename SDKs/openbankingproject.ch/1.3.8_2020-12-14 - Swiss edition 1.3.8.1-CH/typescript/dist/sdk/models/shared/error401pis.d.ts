import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode401PisEnum } from "./messagecode401pisenum";
import { HrefType } from "./hreftype";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error401PisAdditionalErrors extends SpeakeasyBase {
    code: MessageCode401PisEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 401 for PIS.
 *
**/
export declare class Error401Pis extends SpeakeasyBase {
    links?: Record<string, HrefType>;
    additionalErrors?: Error401PisAdditionalErrors[];
    code: MessageCode401PisEnum;
    detail?: string;
    title?: string;
    type: string;
}
