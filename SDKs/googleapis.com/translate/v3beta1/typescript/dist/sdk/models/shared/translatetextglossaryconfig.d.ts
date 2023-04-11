import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configures which glossary should be used for a specific target language, and defines options for applying that glossary.
 */
export declare class TranslateTextGlossaryConfig extends SpeakeasyBase {
    /**
     * Required. Specifies the glossary used for this translation. Use this format: projects/* /locations/* /glossaries/*
     */
    glossary?: string;
    /**
     * Optional. Indicates match is case-insensitive. Default value is false if missing.
     */
    ignoreCase?: boolean;
}
