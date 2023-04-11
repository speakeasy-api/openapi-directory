import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpecTemplateListRequest extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetSpecTemplateListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful retrieval
     */
    specTemplateListVO?: shared.SpecTemplateListVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
