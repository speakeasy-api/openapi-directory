import { SpeakeasyBase } from "../../../internal/utils";
import { MessageCode404PisEnum } from "./messagecode404pisenum";
import { HrefType } from "./hreftype";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error404PisAdditionalErrors extends SpeakeasyBase {
    code: MessageCode404PisEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 404 for PIS.
 *
**/
export declare class Error404Pis extends SpeakeasyBase {
    links?: Record<string, HrefType>;
    additionalErrors?: Error404PisAdditionalErrors[];
    code: MessageCode404PisEnum;
    detail?: string;
    title?: string;
    type: string;
}
