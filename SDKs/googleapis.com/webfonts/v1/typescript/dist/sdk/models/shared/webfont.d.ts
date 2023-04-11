import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata describing a family of fonts.
 */
export declare class Webfont extends SpeakeasyBase {
    /**
     * The category of the font.
     */
    category?: string;
    /**
     * The name of the font.
     */
    family?: string;
    /**
     * The font files (with all supported scripts) for each one of the available variants, as a key : value map.
     */
    files?: Record<string, string>;
    /**
     * This kind represents a webfont object in the webfonts service.
     */
    kind?: string;
    /**
     * The date (format "yyyy-MM-dd") the font was modified for the last time.
     */
    lastModified?: string;
    /**
     * The scripts supported by the font.
     */
    subsets?: string[];
    /**
     * The available variants for the font.
     */
    variants?: string[];
    /**
     * The font version.
     */
    version?: string;
}
