import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
/**
 * Notices object defined in [section 4.3 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.3).
 */
export declare class Notice extends SpeakeasyBase {
    /**
     * Description of the notice.
     */
    description?: string[];
    /**
     * Link to a document containing more information.
     */
    links?: Link[];
    /**
     * Title of a notice. Example: "Terms of Service".
     */
    title?: string;
    /**
     * Type values defined in [section 10.2.1 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-10.2.1) specific to a whole response: "result set truncated due to authorization", "result set truncated due to excessive load", "result set truncated due to unexplainable reasons".
     */
    type?: string;
}
