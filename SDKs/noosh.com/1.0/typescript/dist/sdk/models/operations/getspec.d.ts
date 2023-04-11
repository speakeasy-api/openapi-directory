import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpecRequest extends SpeakeasyBase {
    projectId: string;
    specId: string;
    workgroupId: string;
}
export declare class GetSpecResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful retrieval
     */
    v1x1SpecExpandVO?: shared.V1x1SpecExpandVO;
}
