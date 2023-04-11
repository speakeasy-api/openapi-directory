import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The properties of the citation style entity.
 */
export declare class CitationsStylesListCitationStyleAttributes extends SpeakeasyBase {
    /**
     * The time at which the citation style was first parsed, as an iso8601 formatted timestamp.
     */
    dateParsed: Date;
    /**
     * The short name for the citation style.
     */
    shortTitle?: string;
    /**
     * The summary of the citation style.
     */
    summary?: string;
    /**
     * The official name of the citation style.
     */
    title: string;
}
export declare class CitationsStylesListCitationStyle extends SpeakeasyBase {
    /**
     * The properties of the citation style entity.
     */
    attributes: CitationsStylesListCitationStyleAttributes;
    /**
     * The identifier of the citation style, e.g. APA.
     */
    id: string;
    /**
     * URLs to alternative representations of the citation style entity.
     */
    links?: Record<string, any>;
    /**
     * The type identifier of the citation style entity (`citation-styles`).
     */
    type: string;
}
export declare class CitationsStylesListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
