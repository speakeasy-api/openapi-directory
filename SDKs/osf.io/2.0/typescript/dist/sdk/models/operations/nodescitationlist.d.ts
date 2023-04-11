import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NodesCitationListRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the node.
     */
    nodeId: string;
}
/**
 * The properties of the citation entity.
 */
export declare class NodesCitationListCitationDetailAttributes extends SpeakeasyBase {
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
export declare class NodesCitationListCitationDetailLinks extends SpeakeasyBase {
    /**
     * A link to the entity that is being cited.
     */
    self?: string;
}
/**
 * OK
 */
export declare class NodesCitationListCitationDetail extends SpeakeasyBase {
    /**
     * The properties of the citation entity.
     */
    attributes?: NodesCitationListCitationDetailAttributes;
    /**
     * The identifier of the entity being cited.
     */
    id?: string;
    /**
     * URLs to alternative representations of the citation entity.
     */
    links?: NodesCitationListCitationDetailLinks;
    /**
     * The type identifier of the citation entity (either `node-citation`, `preprint-citation`, or `registration-citation`).
     */
    type?: string;
}
export declare class NodesCitationListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
