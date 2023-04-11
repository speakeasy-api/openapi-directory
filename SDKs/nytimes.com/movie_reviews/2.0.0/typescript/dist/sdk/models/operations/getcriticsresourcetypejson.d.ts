import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCriticsResourceTypeJsonRequest extends SpeakeasyBase {
    /**
     * all | full-time | part-time | [reviewer-name]
     *
     * @remarks
     *
     * Specify all to get all Times reviewers, or specify full-time or part-time to get that subset. Specify a reviewer's name to get details about a particular reviewer.
     *
     */
    resourceType: string;
}
/**
 * An array of Movie Critics
 */
export declare class GetCriticsResourceTypeJson200ApplicationJSON extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.Critic[];
    status?: string;
}
export declare class GetCriticsResourceTypeJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An array of Movie Critics
     */
    getCriticsResourceTypeJSON200ApplicationJSONObject?: GetCriticsResourceTypeJson200ApplicationJSON;
}
