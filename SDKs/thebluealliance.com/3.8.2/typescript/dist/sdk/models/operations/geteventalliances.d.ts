import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventAlliancesSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetEventAlliancesRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Event Key, eg `2016nytr`
     */
    eventKey: string;
}
export declare class GetEventAlliancesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    eliminationAlliances?: shared.EliminationAlliance[];
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
