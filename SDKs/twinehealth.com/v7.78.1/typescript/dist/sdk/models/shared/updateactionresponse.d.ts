import { SpeakeasyBase } from "../../../internal/utils";
import { ActionResource } from "./actionresource";
import { CreateOrUpdateMetaResponse } from "./createorupdatemetaresponse";
/**
 * OK
 */
export declare class UpdateActionResponse extends SpeakeasyBase {
    data: ActionResource;
    meta?: CreateOrUpdateMetaResponse;
}
