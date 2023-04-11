import { SpeakeasyBase } from "../../../internal/utils";
import { ContinuousProject } from "./continuousproject";
import { PagingMeta } from "./pagingmeta";
/**
 * Newly created continuous project
 */
export declare class ContinuousProjectsList extends SpeakeasyBase {
    meta?: PagingMeta;
    projects?: ContinuousProject[];
}
