import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountCredentialsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetAccountCredentialsRequest extends SpeakeasyBase {
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class GetAccountCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * array of credentials
     */
    credentials?: shared.Credential[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
