import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAutocompletePathParams extends SpeakeasyBase {
    term: string;
}
export declare class GetAutocompleteQueryParams extends SpeakeasyBase {
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
export declare class GetAutocompleteRequest extends SpeakeasyBase {
    pathParams: GetAutocompletePathParams;
    queryParams: GetAutocompleteQueryParams;
}
export declare class GetAutocompleteResponse extends SpeakeasyBase {
    autocompleteResults?: shared.AutocompleteResults;
    contentType: string;
    statusCode: number;
}
