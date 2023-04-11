import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AttachProjectJsonRequest extends SpeakeasyBase {
    projectIdListVO?: shared.ProjectIdListVO;
    projectId: string;
    workgroupId: string;
}
export declare class AttachProjectJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Successful update
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
