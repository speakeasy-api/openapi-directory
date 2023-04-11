import { SpeakeasyBase } from "../../../internal/utils";
export declare class FrontendSettingsLanguageSource extends SpeakeasyBase {
    /**
     * Language code
     */
    code?: string;
    /**
     * Human-readable language name (in English)
     */
    name?: string;
}
export declare class FrontendSettingsLanguageTarget extends SpeakeasyBase {
    /**
     * Language code
     */
    code?: string;
    /**
     * Human-readable language name (in English)
     */
    name?: string;
}
export declare class FrontendSettingsLanguage extends SpeakeasyBase {
    source?: FrontendSettingsLanguageSource;
    target?: FrontendSettingsLanguageTarget;
}
/**
 * frontend settings
 */
export declare class FrontendSettings extends SpeakeasyBase {
    /**
     * Whether the API key database is enabled.
     */
    apiKeys?: boolean;
    /**
     * Character input limit for this language (-1 indicates no limit)
     */
    charLimit?: number;
    /**
     * Frontend translation timeout
     */
    frontendTimeout?: number;
    /**
     * Whether an API key is required.
     */
    keyRequired?: boolean;
    language?: FrontendSettingsLanguage;
    /**
     * Whether submitting suggestions is enabled.
     */
    suggestions?: boolean;
    /**
     * Supported files format
     */
    supportedFilesFormat?: string[];
}
