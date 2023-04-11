import { SpeakeasyBase } from "../../../internal/utils";
import { TransferConfig } from "./transferconfig";
/**
 * The returned list of pipelines in the project.
 */
export declare class ListTransferConfigsResponse extends SpeakeasyBase {
    /**
     * Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListTransferConfigsRequest.page_token` to request the next page of list results.
     */
    nextPageToken?: string;
    /**
     * Output only. The stored pipeline transfer configurations.
     */
    transferConfigs?: TransferConfig[];
}
