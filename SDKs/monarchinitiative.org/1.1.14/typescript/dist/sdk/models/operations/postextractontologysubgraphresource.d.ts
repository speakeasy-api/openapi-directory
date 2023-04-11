import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostExtractOntologySubgraphResourceRequest extends SpeakeasyBase {
    /**
     * Additional classes
     */
    cnode?: string[];
    /**
     * Include Ancestors
     */
    includeAncestors?: boolean;
    /**
     * Include Descendants
     */
    includeDescendants?: boolean;
    /**
     * Include metadata in response
     */
    includeMeta?: boolean;
    /**
     * class ID, e.g. HP:0001288
     */
    node: string;
    /**
     * ontology ID, e.g. go, uberon, mp, hp
     */
    ontology: string;
    /**
     * Additional classes
     */
    relation?: string[];
}
export declare class PostExtractOntologySubgraphResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
