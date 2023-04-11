import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSpecJsonRequest extends SpeakeasyBase {
    specPersistVO?: shared.SpecPersistVO;
    projectId: string;
    workgroupId: string;
}
export declare class PostSpecJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Invalid data
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful created
     */
    specVO?: shared.SpecVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
