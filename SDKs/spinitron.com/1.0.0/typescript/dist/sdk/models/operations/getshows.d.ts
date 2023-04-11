import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetShowsRequest extends SpeakeasyBase {
    /**
     * Amount of items to return
     */
    count?: number;
    /**
     * The ending datetime. Maximum 1 hour in past.
     *
     * @remarks
     *
     */
    end?: Date;
    /**
     * Allows to select extra fields
     */
    expand?: string[];
    /**
     * Allows to select only needed fields
     */
    fields?: string[];
    /**
     * Offset, used together with count
     */
    page?: number;
    /**
     * The datetime starting from items must be returned. Maximum 1 hour in past.
     *
     * @remarks
     *
     */
    start?: Date;
}
export declare class GetShows200ApplicationXMLLinks extends SpeakeasyBase {
    self?: shared.Link;
}
/**
 * The shows
 */
export declare class GetShows200ApplicationXML extends SpeakeasyBase {
    links?: GetShows200ApplicationXMLLinks;
    meta?: shared.Pagination;
    items?: shared.Show[];
}
export declare class GetShows200ApplicationJSONLinks extends SpeakeasyBase {
    self?: shared.Link;
}
/**
 * The shows
 */
export declare class GetShows200ApplicationJSON extends SpeakeasyBase {
    links?: GetShows200ApplicationJSONLinks;
    meta?: shared.Pagination;
    items?: shared.Show[];
}
export declare class GetShowsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Invalid datetimes in filter: either too old or {end} is less than {start}.
     *
     * @remarks
     *
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The shows
     */
    getShows200ApplicationJSONObject?: GetShows200ApplicationJSON;
}
