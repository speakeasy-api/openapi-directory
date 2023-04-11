import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostEstimateJsonRequest extends SpeakeasyBase {
    estimatePO?: shared.EstimatePO;
    projectId: string;
    workgroupId: string;
}
export declare class PostEstimateJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Successful create
     */
    estimatePO?: shared.EstimatePO;
    /**
     * Invalid data
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
