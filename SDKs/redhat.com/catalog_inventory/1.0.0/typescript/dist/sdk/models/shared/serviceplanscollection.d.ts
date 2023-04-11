import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
import { ServicePlan } from "./serviceplan";
/**
 * ServicePlans collection
 */
export declare class ServicePlansCollection extends SpeakeasyBase {
    data?: ServicePlan[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
