import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { FetchMetaResponse } from "./fetchmetaresponse";
/**
 * Unauthorized
 */
export declare class FetchErrorResponse extends SpeakeasyBase {
    errors?: ErrorT;
    meta?: FetchMetaResponse;
}
