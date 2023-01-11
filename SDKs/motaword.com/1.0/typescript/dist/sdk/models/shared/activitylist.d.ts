import { SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
import { PagingMeta } from "./pagingmeta";
export declare class ActivityList extends SpeakeasyBase {
    activities?: Activity[];
    meta?: PagingMeta;
}
