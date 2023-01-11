import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOntologyTermSubgraphPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetOntologyTermSubgraphQueryParams extends SpeakeasyBase {
    cnode?: string[];
    includeAncestors?: boolean;
    includeDescendants?: boolean;
    includeMeta?: boolean;
    relation?: string[];
}
export declare class GetOntologyTermSubgraphRequest extends SpeakeasyBase {
    pathParams: GetOntologyTermSubgraphPathParams;
    queryParams: GetOntologyTermSubgraphQueryParams;
}
export declare class GetOntologyTermSubgraphResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
