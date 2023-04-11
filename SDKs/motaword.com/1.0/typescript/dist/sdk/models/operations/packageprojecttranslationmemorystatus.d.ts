import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PackageProjectTranslationMemoryStatusRequest extends SpeakeasyBase {
    /**
     * Async operation key
     */
    asyncRequestKey: string;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class PackageProjectTranslationMemoryStatusResponse extends SpeakeasyBase {
    /**
     * Async operation status. Use the key to query status of this operation.
     */
    asyncOperationStatus?: shared.AsyncOperationStatus;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
