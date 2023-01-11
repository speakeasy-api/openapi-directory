import { SpeakeasyBase } from "../../../internal/utils";
export declare class HashtagSuggestionsQueryParams extends SpeakeasyBase {
    text: string;
}
export declare class HashtagSuggestionsRequest extends SpeakeasyBase {
    queryParams: HashtagSuggestionsQueryParams;
}
export declare class HashtagSuggestionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
