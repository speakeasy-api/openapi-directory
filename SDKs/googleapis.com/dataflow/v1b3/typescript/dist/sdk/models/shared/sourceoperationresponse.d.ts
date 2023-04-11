import { SpeakeasyBase } from "../../../internal/utils";
import { SourceGetMetadataResponse } from "./sourcegetmetadataresponse";
import { SourceSplitResponse } from "./sourcesplitresponse";
/**
 * The result of a SourceOperationRequest, specified in ReportWorkItemStatusRequest.source_operation when the work item is completed.
 */
export declare class SourceOperationResponse extends SpeakeasyBase {
    /**
     * The result of a SourceGetMetadataOperation.
     */
    getMetadata?: SourceGetMetadataResponse;
    /**
     * The response to a SourceSplitRequest.
     */
    split?: SourceSplitResponse;
}
