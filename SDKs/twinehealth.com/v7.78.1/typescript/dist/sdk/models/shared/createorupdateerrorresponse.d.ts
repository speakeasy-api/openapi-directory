import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOrUpdateMetaResponse } from "./createorupdatemetaresponse";
import { ErrorT } from "./error";
/**
 * Unauthorized
 */
export declare class CreateOrUpdateErrorResponse extends SpeakeasyBase {
    errors?: ErrorT;
    meta?: CreateOrUpdateMetaResponse;
}
