import { SpeakeasyBase } from "../../../internal/utils";
import { ActionResource } from "./actionresource";
import { FetchMetaResponse } from "./fetchmetaresponse";
/**
 * OK
 */
export declare class FetchActionResponse extends SpeakeasyBase {
    data: ActionResource;
    meta?: FetchMetaResponse;
}
