import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1FiltersIdSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1FiltersIdRequest extends SpeakeasyBase {
    /**
     * The id of the account in the database
     */
    id: string;
}
export declare class GetApiV1FiltersIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Filter returned successfully.
     */
    filter?: shared.Filter;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
