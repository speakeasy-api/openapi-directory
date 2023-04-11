import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddItemIdsSpotListRequest extends SpeakeasyBase {
    /**
     * A JSON array containing spot ids
     */
    requestBody: string[];
    /**
     * Unique identifier
     */
    id: string;
}
export declare class AddItemIdsSpotListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the status and the total amount of items in the newly added list
     */
    responseListResource?: shared.ResponseListResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
