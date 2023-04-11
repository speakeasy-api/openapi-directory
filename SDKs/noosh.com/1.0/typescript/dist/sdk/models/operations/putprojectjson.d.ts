import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutProjectJsonRequest extends SpeakeasyBase {
    projectPersistVO?: shared.ProjectPersistVO;
    projectId: string;
    workgroupId: string;
}
export declare class PutProjectJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Successful update
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
