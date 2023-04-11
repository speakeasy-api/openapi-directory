import { SpeakeasyBase } from "../../../internal/utils";
import { HelpLink } from "./helplink";
/**
 * Provides links to documentation or for performing an out of band action. For example, if a quota check failed with an error indicating the calling project hasn't enabled the accessed service, this can contain a URL pointing directly to the right place in the developer console to flip the bit.
 */
export declare class Help extends SpeakeasyBase {
    /**
     * URL(s) pointing to additional information on handling the current error.
     */
    links?: HelpLink[];
}
