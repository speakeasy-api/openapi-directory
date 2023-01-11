import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetExtractOntologySubgraphResourcePathParams extends SpeakeasyBase {
    node: string;
    ontology: string;
}
export declare class GetExtractOntologySubgraphResourceQueryParams extends SpeakeasyBase {
    cnode?: string[];
    includeAncestors?: boolean;
    includeDescendants?: boolean;
    includeMeta?: boolean;
    relation?: string[];
}
export declare class GetExtractOntologySubgraphResourceRequest extends SpeakeasyBase {
    pathParams: GetExtractOntologySubgraphResourcePathParams;
    queryParams: GetExtractOntologySubgraphResourceQueryParams;
}
export declare class GetExtractOntologySubgraphResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
