import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetQuoteAuthorsSearchSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class GetQuoteAuthorsSearchRequest extends SpeakeasyBase {
    /**
     * Should return detailed author information such as `birthday`, `death date`, `occupation`, `description` etc. Only available at certain subscription levels.
     */
    detailed?: boolean;
    /**
     * Language. A same author may have quotes in two or more different languages. So for example 'Mahatma Gandhi' may be returned for language "en"(English), and "மஹாத்மா காந்தி" may be returned when the language is "ta" (Tamil).
     */
    language?: string;
    /**
     * Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level.
     */
    limit?: number;
    /**
     * Text string to search for in author names
     */
    query?: string;
    /**
     * Response is paged. This parameter controls where response starts the listing at
     */
    start?: number;
}
export declare class GetQuoteAuthorsSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
