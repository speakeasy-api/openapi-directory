import { SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
import { PagingMeta } from "./pagingmeta";
/**
 * A list of activity models
 */
export declare class ActivityList extends SpeakeasyBase {
    activities?: Activity[];
    meta?: PagingMeta;
}
