import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTeamDistrictsSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetTeamDistrictsRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Team Key, eg `frc254`
     */
    teamKey: string;
}
export declare class GetTeamDistrictsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    districtLists?: shared.DistrictList[];
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
