import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectListRequest extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetProjectListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful retrieval
     */
    projectListVO?: shared.ProjectListVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
