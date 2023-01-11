import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchEntitiesPathParams extends SpeakeasyBase {
    term: string;
}
export declare class GetSearchEntitiesQueryParams extends SpeakeasyBase {
    boostFx?: string[];
    boostQ?: string[];
    category?: string[];
    excludeGroups?: boolean;
    fq?: string[];
    highlightClass?: string;
    includeEqs?: boolean;
    minMatch?: string;
    minimalTokenizer?: boolean;
    prefix?: string[];
    rows?: number;
    start?: string;
    taxon?: string[];
}
export declare class GetSearchEntitiesRequest extends SpeakeasyBase {
    pathParams: GetSearchEntitiesPathParams;
    queryParams: GetSearchEntitiesQueryParams;
}
export declare class GetSearchEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    searchResult?: shared.SearchResult;
    statusCode: number;
}
