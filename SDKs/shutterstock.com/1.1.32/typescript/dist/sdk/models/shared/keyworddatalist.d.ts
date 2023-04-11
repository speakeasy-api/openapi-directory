import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * List of keywords
 */
export declare class KeywordDataList extends SpeakeasyBase {
    /**
     * Keywords
     */
    data?: string[];
    /**
     * Error list; appears only if there was an error
     */
    errors?: ErrorT[];
    /**
     * Server-generated message, if any
     */
    message?: string;
}
