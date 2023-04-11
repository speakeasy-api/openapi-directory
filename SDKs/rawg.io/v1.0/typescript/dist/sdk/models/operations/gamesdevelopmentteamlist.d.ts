import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GamesDevelopmentTeamListRequest extends SpeakeasyBase {
    gamePk: string;
    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;
    /**
     * A page number within the paginated result set.
     */
    page?: number;
    /**
     * Number of results to return per page.
     */
    pageSize?: number;
}
export declare class GamesDevelopmentTeamList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.GamePersonList[];
}
export declare class GamesDevelopmentTeamListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    gamesDevelopmentTeamList200ApplicationJSONObject?: GamesDevelopmentTeamList200ApplicationJSON;
}
