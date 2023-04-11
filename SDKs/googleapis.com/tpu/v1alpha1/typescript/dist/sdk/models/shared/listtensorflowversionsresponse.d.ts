import { SpeakeasyBase } from "../../../internal/utils";
import { TensorFlowVersion } from "./tensorflowversion";
/**
 * Response for ListTensorFlowVersions.
 */
export declare class ListTensorFlowVersionsResponse extends SpeakeasyBase {
    /**
     * The next page token or empty if none.
     */
    nextPageToken?: string;
    /**
     * The listed nodes.
     */
    tensorflowVersions?: TensorFlowVersion[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
