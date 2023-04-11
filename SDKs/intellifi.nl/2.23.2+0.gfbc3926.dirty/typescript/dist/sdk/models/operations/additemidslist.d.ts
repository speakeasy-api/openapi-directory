import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddItemIdsListRequest extends SpeakeasyBase {
    /**
     * A JSON array containing item ids
     */
    requestBody: string[];
    /**
     * Unique identifier
     */
    id: string;
}
export declare class AddItemIdsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the status and the total amount of items in the newly added list
     */
    responseListResource?: shared.ResponseListResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
