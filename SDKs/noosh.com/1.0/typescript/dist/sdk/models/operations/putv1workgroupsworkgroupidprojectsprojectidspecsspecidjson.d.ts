import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJsonRequest extends SpeakeasyBase {
    specUpdatePersistVO?: shared.SpecUpdatePersistVO;
    projectId: string;
    specId: string;
    workgroupId: string;
}
export declare class PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJsonResponse extends SpeakeasyBase {
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
