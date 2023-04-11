import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpecTypeFieldsRequest extends SpeakeasyBase {
    specTypeId: string;
    workgroupId: string;
}
export declare class GetSpecTypeFieldsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful retrieval
     */
    specTypeFieldsListVO?: shared.SpecTypeFieldsListVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
