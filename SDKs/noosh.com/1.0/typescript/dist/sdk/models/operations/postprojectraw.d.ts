import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostProjectRawRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    workgroupId: string;
}
export declare class PostProjectRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Invalid data
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful created
     */
    projectVO?: shared.ProjectVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
