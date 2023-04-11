import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2BulkJobsIdRequest extends SpeakeasyBase {
    /**
     * The id for the Bulk Job
     */
    id: number;
}
export declare class GetV2BulkJobsIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
