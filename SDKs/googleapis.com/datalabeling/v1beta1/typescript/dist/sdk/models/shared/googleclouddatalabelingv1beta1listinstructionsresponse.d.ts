import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Instruction } from "./googleclouddatalabelingv1beta1instruction";
/**
 * Results of listing instructions under a project.
 */
export declare class GoogleCloudDatalabelingV1beta1ListInstructionsResponse extends SpeakeasyBase {
    /**
     * The list of Instructions to return.
     */
    instructions?: GoogleCloudDatalabelingV1beta1Instruction[];
    /**
     * A token to retrieve next page of results.
     */
    nextPageToken?: string;
}
