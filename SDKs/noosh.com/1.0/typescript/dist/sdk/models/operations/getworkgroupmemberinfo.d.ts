import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWorkgroupMemberInfoRequest extends SpeakeasyBase {
    userId: string;
    workgroupId: string;
}
export declare class GetWorkgroupMemberInfoResponse extends SpeakeasyBase {
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
    userDetailsExpandVO?: shared.UserDetailsExpandVO;
}
