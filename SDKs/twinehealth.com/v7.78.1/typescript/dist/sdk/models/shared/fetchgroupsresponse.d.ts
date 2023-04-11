import { SpeakeasyBase } from "../../../internal/utils";
import { FetchMetaResponse } from "./fetchmetaresponse";
import { GroupResource } from "./groupresource";
/**
 * OK
 */
export declare class FetchGroupsResponse extends SpeakeasyBase {
    data: GroupResource[];
    meta?: FetchMetaResponse;
}
