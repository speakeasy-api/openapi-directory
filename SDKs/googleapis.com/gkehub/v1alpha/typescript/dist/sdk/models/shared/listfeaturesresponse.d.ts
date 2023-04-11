import { SpeakeasyBase } from "../../../internal/utils";
import { Feature } from "./feature";
/**
 * Response message for the `GkeHub.ListFeatures` method.
 */
export declare class ListFeaturesResponse extends SpeakeasyBase {
    /**
     * A token to request the next page of resources from the `ListFeatures` method. The value of an empty string means that there are no more resources to return.
     */
    nextPageToken?: string;
    /**
     * The list of matching Features
     */
    resources?: Feature[];
}
