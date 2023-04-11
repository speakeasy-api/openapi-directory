import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1AccountsRelationshipsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1AccountsRelationshipsRequest extends SpeakeasyBase {
    /**
     * Array of account IDs to check
     */
    id: string[];
}
export declare class GetApiV1AccountsRelationshipsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Success.
     */
    relationships?: shared.Relationship[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
