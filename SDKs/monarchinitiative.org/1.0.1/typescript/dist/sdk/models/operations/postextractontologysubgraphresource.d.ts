import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostExtractOntologySubgraphResourcePathParams extends SpeakeasyBase {
    node: string;
    ontology: string;
}
export declare class PostExtractOntologySubgraphResourceQueryParams extends SpeakeasyBase {
    cnode?: string[];
    includeAncestors?: boolean;
    includeDescendants?: boolean;
    includeMeta?: boolean;
    relation?: string[];
}
export declare class PostExtractOntologySubgraphResourceRequest extends SpeakeasyBase {
    pathParams: PostExtractOntologySubgraphResourcePathParams;
    queryParams: PostExtractOntologySubgraphResourceQueryParams;
}
export declare class PostExtractOntologySubgraphResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
