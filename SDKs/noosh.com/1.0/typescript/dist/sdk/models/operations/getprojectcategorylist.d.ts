import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectCategoryListRequest extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetProjectCategoryListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful retrieval
     */
    projectCategoryListVO?: shared.ProjectCategoryListVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
