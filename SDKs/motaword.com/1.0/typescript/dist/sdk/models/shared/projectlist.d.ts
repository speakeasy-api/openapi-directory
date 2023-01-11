import { SpeakeasyBase } from "../../../internal/utils";
import { PagingMeta } from "./pagingmeta";
import { Project } from "./project";
export declare class ProjectList extends SpeakeasyBase {
    meta?: PagingMeta;
    projects?: Project[];
}
