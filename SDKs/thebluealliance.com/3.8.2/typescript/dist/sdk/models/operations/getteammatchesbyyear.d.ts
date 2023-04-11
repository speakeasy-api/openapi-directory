import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTeamMatchesByYearSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetTeamMatchesByYearRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Team Key, eg `frc254`
     */
    teamKey: string;
    /**
     * Competition Year (or Season). Must be 4 digits.
     */
    year: number;
}
export declare class GetTeamMatchesByYearResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Successful response
     */
    matches?: shared.Match[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
