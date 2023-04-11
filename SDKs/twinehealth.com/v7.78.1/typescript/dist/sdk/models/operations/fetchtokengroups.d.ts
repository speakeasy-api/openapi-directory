import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchTokenGroupsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class FetchTokenGroupsRequest extends SpeakeasyBase {
    /**
     * Token identifier
     */
    id: string;
}
export declare class FetchTokenGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchGroupsResponse?: shared.FetchGroupsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
