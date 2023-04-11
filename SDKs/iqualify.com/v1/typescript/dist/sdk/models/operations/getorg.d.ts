import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrgResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    /**
     * organisation summary data
     */
    orgResponse?: shared.OrgResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
