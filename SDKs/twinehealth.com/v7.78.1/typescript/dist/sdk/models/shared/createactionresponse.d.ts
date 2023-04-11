import { SpeakeasyBase } from "../../../internal/utils";
import { ActionResource } from "./actionresource";
import { CreateOrUpdateMetaResponse } from "./createorupdatemetaresponse";
/**
 * OK
 */
export declare class CreateActionResponse extends SpeakeasyBase {
    data: ActionResource;
    meta?: CreateOrUpdateMetaResponse;
}
