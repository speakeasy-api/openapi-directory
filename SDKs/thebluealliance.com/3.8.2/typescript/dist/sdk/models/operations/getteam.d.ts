import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTeamSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetTeamRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Team Key, eg `frc254`
     */
    teamKey: string;
}
export declare class GetTeamResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    team?: shared.Team;
}
