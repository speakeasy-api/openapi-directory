import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTeamEventsByYearSimpleSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetTeamEventsByYearSimpleRequest extends SpeakeasyBase {
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
export declare class GetTeamEventsByYearSimpleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    eventSimples?: shared.EventSimple[];
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
