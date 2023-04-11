import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPagesCountJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetPagesCountJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Total number of pages
     */
    count?: shared.Count;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
