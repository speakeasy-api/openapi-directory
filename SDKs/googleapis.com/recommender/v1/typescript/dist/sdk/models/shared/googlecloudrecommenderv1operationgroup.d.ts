import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1Operation } from "./googlecloudrecommenderv1operation";
/**
 * Group of operations that need to be performed atomically.
 */
export declare class GoogleCloudRecommenderV1OperationGroup extends SpeakeasyBase {
    /**
     * List of operations across one or more resources that belong to this group. Loosely based on RFC6902 and should be performed in the order they appear.
     */
    operations?: GoogleCloudRecommenderV1Operation[];
}
