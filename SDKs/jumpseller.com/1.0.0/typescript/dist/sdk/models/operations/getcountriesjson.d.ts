import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCountriesJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetCountriesJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of Countries
     */
    countries?: shared.Country[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
