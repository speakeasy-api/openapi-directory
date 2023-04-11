import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasObjectChangesListRequest extends SpeakeasyBase {
    action?: string;
    changedObjectType?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    objectRepr?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    q?: string;
    requestId?: string;
    time?: string;
    user?: string;
    userName?: string;
}
export declare class ExtrasObjectChangesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.ObjectChange[];
}
export declare class ExtrasObjectChangesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    extrasObjectChangesList200ApplicationJSONObject?: ExtrasObjectChangesList200ApplicationJSON;
}
