import { SpeakeasyBase } from "../../../internal/utils";
export declare class EmojiSuggestionsQueryParams extends SpeakeasyBase {
    text: string;
}
export declare class EmojiSuggestionsRequest extends SpeakeasyBase {
    queryParams: EmojiSuggestionsQueryParams;
}
export declare class EmojiSuggestionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
