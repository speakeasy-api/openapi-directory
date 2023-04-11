import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteItemIdFromItemListRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id: string;
    /**
     * Item ID.
     */
    itemId: string;
}
export declare class DeleteItemIdFromItemListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the status and the total amount of items in the list
     */
    responseListResource?: shared.ResponseListResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
