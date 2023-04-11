import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PreprintsCitationListRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the preprint whose citation you wish to retrieve.
     */
    preprintId: string;
}
/**
 * The properties of the citation entity.
 */
export declare class PreprintsCitationListCitationDetailAttributes extends SpeakeasyBase {
    /**
     * The list of bibliographic authors, represented as dictionaries of their given and family names, for the entitiy being cited.
     */
    author?: string;
    /**
     * The DOI for the entity being cited, if one exists.
     */
    doi?: string;
    /**
     * The publisher of the entity being cited. For nodes and registrations, the publisher is the 'Open Science Framework'. For preprints, the publisher is the same as the preprint provider.
     */
    publisher?: string;
    /**
     * The title of the entity being cited.
     */
    title?: string;
}
/**
 * URLs to alternative representations of the citation entity.
 */
export declare class PreprintsCitationListCitationDetailLinks extends SpeakeasyBase {
    /**
     * A link to the entity that is being cited.
     */
    self?: string;
}
export declare class PreprintsCitationListCitationDetail extends SpeakeasyBase {
    /**
     * The properties of the citation entity.
     */
    attributes?: PreprintsCitationListCitationDetailAttributes;
    /**
     * The identifier of the entity being cited.
     */
    id?: string;
    /**
     * URLs to alternative representations of the citation entity.
     */
    links?: PreprintsCitationListCitationDetailLinks;
    /**
     * The type identifier of the citation entity (either `node-citation`, `preprint-citation`, or `registration-citation`).
     */
    type?: string;
}
export declare class PreprintsCitationListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
