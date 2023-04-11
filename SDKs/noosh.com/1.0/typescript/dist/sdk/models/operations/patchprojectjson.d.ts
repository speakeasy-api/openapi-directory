import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchProjectJsonRequest extends SpeakeasyBase {
    projectPatchPO?: shared.ProjectPatchPO;
    projectId: string;
    workgroupId: string;
}
export declare class PatchProjectJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Successful patch
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
