import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpinsRequest extends SpeakeasyBase {
    /**
     * Amount of items to return
     */
    count?: number;
    /**
     * The ending datetime.
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
     * Filter by playlist
     */
    playlistId?: number;
    /**
     * Filter by show
     */
    showId?: number;
    /**
     * The datetime starting from items must be returned.
     *
     * @remarks
     *
     */
    start?: Date;
}
export declare class GetSpins200ApplicationXMLLinks extends SpeakeasyBase {
    self?: shared.Link;
}
/**
 * The spins
 */
export declare class GetSpins200ApplicationXML extends SpeakeasyBase {
    links?: GetSpins200ApplicationXMLLinks;
    meta?: shared.Pagination;
    items?: shared.Spin[];
}
export declare class GetSpins200ApplicationJSONLinks extends SpeakeasyBase {
    self?: shared.Link;
}
/**
 * The spins
 */
export declare class GetSpins200ApplicationJSON extends SpeakeasyBase {
    links?: GetSpins200ApplicationJSONLinks;
    meta?: shared.Pagination;
    items?: shared.Spin[];
}
export declare class GetSpinsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The spins
     */
    getSpins200ApplicationJSONObject?: GetSpins200ApplicationJSON;
}
