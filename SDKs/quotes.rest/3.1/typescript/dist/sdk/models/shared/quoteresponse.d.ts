import { SpeakeasyBase } from "../../../internal/utils";
import { Quote } from "./quote";
export declare class QuoteResponseContents extends SpeakeasyBase {
    /**
     * List of quotes
     */
    quotes?: Quote[];
}
/**
 * 200  response
 */
export declare class QuoteResponse extends SpeakeasyBase {
    contents?: QuoteResponseContents;
    /**
     * Metadata about this successful call
     */
    success?: string;
}
