import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpecTemplateRequest extends SpeakeasyBase {
    specTemplateId: string;
    workgroupId: string;
}
export declare class GetSpecTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful retrieval
     */
    specTemplateExpandVO?: shared.SpecTemplateExpandVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
