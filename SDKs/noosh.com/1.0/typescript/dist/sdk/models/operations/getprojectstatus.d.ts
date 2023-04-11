import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectStatusRequest extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetProjectStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful retrieval
     */
    projectStatusListVO?: shared.ProjectStatusListVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
