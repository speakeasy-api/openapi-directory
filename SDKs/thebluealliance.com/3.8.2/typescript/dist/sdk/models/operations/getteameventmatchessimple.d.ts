import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTeamEventMatchesSimpleSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetTeamEventMatchesSimpleRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Event Key, eg `2016nytr`
     */
    eventKey: string;
    /**
     * TBA Team Key, eg `frc254`
     */
    teamKey: string;
}
export declare class GetTeamEventMatchesSimpleResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Successful response
     */
    matches?: shared.Match[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
