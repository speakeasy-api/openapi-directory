import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTeamMediaByTagYearSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetTeamMediaByTagYearRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * Media Tag which describes the Media.
     */
    mediaTag: string;
    /**
     * TBA Team Key, eg `frc254`
     */
    teamKey: string;
    /**
     * Competition Year (or Season). Must be 4 digits.
     */
    year: number;
}
export declare class GetTeamMediaByTagYearResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Successful response
     */
    media?: shared.Media[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
