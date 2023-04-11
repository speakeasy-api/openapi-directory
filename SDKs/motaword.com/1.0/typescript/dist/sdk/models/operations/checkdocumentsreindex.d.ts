import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CheckDocumentsReindexRequest extends SpeakeasyBase {
    /**
     * Async operation key
     */
    asyncRequestKey: string;
}
export declare class CheckDocumentsReindexResponse extends SpeakeasyBase {
    /**
     * Async operation status. Use the key to query status of this operation.
     */
    asyncOperationStatus?: shared.AsyncOperationStatus;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
