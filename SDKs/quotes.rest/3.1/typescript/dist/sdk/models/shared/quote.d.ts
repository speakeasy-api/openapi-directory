import { SpeakeasyBase } from "../../../internal/utils";
export declare class Quote extends SpeakeasyBase {
    /**
     * Author name of quote.
     */
    author?: string;
    /**
     * Unique identifier representing a specific quote in theysaidso.com.
     */
    id: string;
    /**
     * Image URL that can be used for background to display this quote.
     */
    image?: string;
    /**
     * Length of the quote string.
     */
    length?: number;
    /**
     * The Quote.
     */
    quote: string;
    /**
     * Array of tags/categories.
     */
    tags?: string[];
}
