import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AttachProjectRawRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    projectId: string;
    workgroupId: string;
}
export declare class AttachProjectRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Successful update
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
