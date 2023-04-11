import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a user-facing message with locale info. The maximum message length is 4096 characters.
 */
export declare class UserFacingMessage extends SpeakeasyBase {
    /**
     * The default message displayed if no localized message is specified or the user's locale doesn't match with any of the localized messages. A default message must be provided if any localized messages are provided.
     */
    defaultMessage?: string;
    /**
     * A map containing pairs, where locale is a well-formed BCP 47 language (https://www.w3.org/International/articles/language-tags/) code, such as en-US, es-ES, or fr.
     */
    localizedMessages?: Record<string, string>;
}
