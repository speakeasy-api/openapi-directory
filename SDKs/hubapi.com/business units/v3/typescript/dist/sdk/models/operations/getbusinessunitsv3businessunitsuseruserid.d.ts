import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBusinessUnitsV3BusinessUnitsUserUserIdSecurity extends SpeakeasyBase {
    oauth2Legacy?: string;
    privateAppsLegacy?: string;
}
export declare class GetBusinessUnitsV3BusinessUnitsUserUserIdRequest extends SpeakeasyBase {
    /**
     * The names of Business Units to retrieve. If empty or not provided, then all associated Business Units will be returned.
     */
    name?: string[];
    /**
     * The names of properties to optionally include in the response body. The only valid value is `logoMetadata`.
     */
    properties?: string[];
    /**
     * Identifier of user to retrieve.
     */
    userId: string;
}
export declare class GetBusinessUnitsV3BusinessUnitsUserUserIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * successful operation
     */
    collectionResponsePublicBusinessUnitNoPaging?: shared.CollectionResponsePublicBusinessUnitNoPaging;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
