import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpotListByIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id: string;
}
export declare class GetSpotListByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the spot list
     */
    spotList?: shared.SpotList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
