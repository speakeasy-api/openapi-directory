import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchGroupRequest extends SpeakeasyBase {
    /**
     * Group identifier
     */
    id: string;
}
export declare class FetchGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchGroupResponse?: shared.FetchGroupResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
