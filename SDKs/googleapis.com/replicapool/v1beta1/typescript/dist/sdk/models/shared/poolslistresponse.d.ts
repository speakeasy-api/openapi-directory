import { SpeakeasyBase } from "../../../internal/utils";
import { Pool } from "./pool";
/**
 * Successful response
 */
export declare class PoolsListResponse extends SpeakeasyBase {
    nextPageToken?: string;
    resources?: Pool[];
}
