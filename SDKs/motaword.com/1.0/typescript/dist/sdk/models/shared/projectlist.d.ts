import { SpeakeasyBase } from "../../../internal/utils";
import { PagingMeta } from "./pagingmeta";
import { Project } from "./project";
/**
 * Newly created project
 */
export declare class ProjectList extends SpeakeasyBase {
    meta?: PagingMeta;
    projects?: Project[];
}
