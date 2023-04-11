import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NodesIdentifiersListRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the node.
     */
    nodeId: string;
}
/**
 * The category of the identifier
 */
export declare enum NodesIdentifiersListIdentifierAttributesCategoryEnum {
    Ark = "ark",
    Doi = "doi"
}
/**
 * The properties of the identifier entity.
 */
export declare class NodesIdentifiersListIdentifierAttributes extends SpeakeasyBase {
    /**
     * The category of the identifier
     */
    category?: NodesIdentifiersListIdentifierAttributesCategoryEnum;
    /**
     * The identifier value itself
     */
    value?: string;
}
/**
 * URLs to alternative representations of the identifier entity.
 */
export declare class NodesIdentifiersListIdentifierLinks extends SpeakeasyBase {
    /**
     * A link to the detail page for the identifier.
     */
    self?: string;
}
/**
 * URLs to other entities or entity collections that have a relationship to the identifier entity.
 */
export declare class NodesIdentifiersListIdentifierRelationships extends SpeakeasyBase {
    /**
     * A relationship to the node the identifier refers to.
     */
    referent?: string;
}
export declare class NodesIdentifiersListIdentifier extends SpeakeasyBase {
    /**
     * The properties of the identifier entity.
     */
    attributes?: NodesIdentifiersListIdentifierAttributes;
    /**
     * The identifier of the identifier entity.
     */
    id?: string;
    /**
     * URLs to alternative representations of the identifier entity.
     */
    links?: NodesIdentifiersListIdentifierLinks;
    /**
     * URLs to other entities or entity collections that have a relationship to the identifier entity.
     */
    relationships?: NodesIdentifiersListIdentifierRelationships;
    /**
     * The type identifier of the identifier entity (`identifiers`).
     */
    type?: string;
}
export declare class NodesIdentifiersListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
