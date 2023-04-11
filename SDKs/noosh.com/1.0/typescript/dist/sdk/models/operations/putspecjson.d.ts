import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSpecJsonRequest extends SpeakeasyBase {
    v1X1SpecUpdatingPO?: shared.V1X1SpecUpdatingPO;
    projectId: string;
    specId: string;
    workgroupId: string;
}
export declare class PutSpecJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful updated
     */
    specHTTPStatusVO?: shared.SpecHTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
