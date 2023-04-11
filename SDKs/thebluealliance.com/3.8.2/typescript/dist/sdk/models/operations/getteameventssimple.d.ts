import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTeamEventsSimpleSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetTeamEventsSimpleRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Team Key, eg `frc254`
     */
    teamKey: string;
}
export declare class GetTeamEventsSimpleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    eventSimples?: shared.EventSimple[];
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
