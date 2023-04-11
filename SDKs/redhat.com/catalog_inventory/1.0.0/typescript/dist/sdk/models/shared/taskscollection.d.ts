import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
import { Task } from "./task";
/**
 * Tasks collection
 */
export declare class TasksCollection extends SpeakeasyBase {
    data?: Task[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
