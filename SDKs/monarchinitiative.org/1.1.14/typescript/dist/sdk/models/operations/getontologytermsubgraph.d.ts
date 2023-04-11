import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOntologyTermSubgraphRequest extends SpeakeasyBase {
    /**
     * Additional classes
     */
    cnode?: string[];
    /**
     * CURIE identifier of a GO term, e.g. GO:0007275
     */
    id: string;
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
     * Additional classes
     */
    relation?: string[];
}
export declare class GetOntologyTermSubgraphResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
