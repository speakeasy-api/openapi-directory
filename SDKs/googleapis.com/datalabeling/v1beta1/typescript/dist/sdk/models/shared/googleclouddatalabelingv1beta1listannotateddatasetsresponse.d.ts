import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotatedDataset } from "./googleclouddatalabelingv1beta1annotateddataset";
/**
 * Results of listing annotated datasets for a dataset.
 */
export declare class GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse extends SpeakeasyBase {
    /**
     * The list of annotated datasets to return.
     */
    annotatedDatasets?: GoogleCloudDatalabelingV1beta1AnnotatedDataset[];
    /**
     * A token to retrieve next page of results.
     */
    nextPageToken?: string;
}
