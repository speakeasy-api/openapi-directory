import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a localized error message that is safe to return to the user which can be attached to an RPC error.
 */
export declare class LocalizedMessage extends SpeakeasyBase {
    /**
     * The locale used following the specification defined at https://www.rfc-editor.org/rfc/bcp/bcp47.txt. Examples are: "en-US", "fr-CH", "es-MX"
     */
    locale?: string;
    /**
     * The localized error message in the above locale.
     */
    message?: string;
}
