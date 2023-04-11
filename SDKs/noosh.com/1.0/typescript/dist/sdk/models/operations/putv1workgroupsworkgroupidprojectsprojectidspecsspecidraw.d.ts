import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRawRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    projectId: string;
    specId: string;
    workgroupId: string;
}
export declare class PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful updated
     */
    specHTTPStatusVO?: shared.SpecHTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
