import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStoreLanguagesJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetStoreLanguagesJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    languages?: shared.Language[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
