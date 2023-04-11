import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1DataItem } from "./googleclouddatalabelingv1beta1dataitem";
/**
 * Results of listing data items in a dataset.
 */
export declare class GoogleCloudDatalabelingV1beta1ListDataItemsResponse extends SpeakeasyBase {
    /**
     * The list of data items to return.
     */
    dataItems?: GoogleCloudDatalabelingV1beta1DataItem[];
    /**
     * A token to retrieve next page of results.
     */
    nextPageToken?: string;
}
