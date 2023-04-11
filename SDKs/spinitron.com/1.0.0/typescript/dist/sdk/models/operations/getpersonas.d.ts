import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPersonasRequest extends SpeakeasyBase {
    /**
     * Amount of items to return
     */
    count?: number;
    /**
     * Allows to select extra fields
     */
    expand?: string[];
    /**
     * Allows to select only needed fields
     */
    fields?: string[];
    /**
     * Filter by Persona name
     */
    name?: string;
    /**
     * Offset, used together with count
     */
    page?: number;
}
export declare class GetPersonas200ApplicationXMLLinks extends SpeakeasyBase {
    self?: shared.Link;
}
/**
 * The personas
 */
export declare class GetPersonas200ApplicationXML extends SpeakeasyBase {
    links?: GetPersonas200ApplicationXMLLinks;
    meta?: shared.Pagination;
    items?: shared.Persona[];
}
export declare class GetPersonas200ApplicationJSONLinks extends SpeakeasyBase {
    self?: shared.Link;
}
/**
 * The personas
 */
export declare class GetPersonas200ApplicationJSON extends SpeakeasyBase {
    links?: GetPersonas200ApplicationJSONLinks;
    meta?: shared.Pagination;
    items?: shared.Persona[];
}
export declare class GetPersonasResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The personas
     */
    getPersonas200ApplicationJSONObject?: GetPersonas200ApplicationJSON;
}
