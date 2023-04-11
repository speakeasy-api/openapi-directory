import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFulfillmentsCountJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetFulfillmentsCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    count?: shared.Count;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
