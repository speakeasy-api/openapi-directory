import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1ListsIdSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1ListsIdRequest extends SpeakeasyBase {
    /**
     * ID of the list in the database
     */
    id: string;
}
export declare class GetApiV1ListsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * The value of unread has been changed to false..
     */
    list?: shared.List;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
