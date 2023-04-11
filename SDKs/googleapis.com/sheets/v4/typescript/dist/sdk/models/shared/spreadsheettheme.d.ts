import { SpeakeasyBase } from "../../../internal/utils";
import { ThemeColorPair } from "./themecolorpair";
/**
 * Represents spreadsheet theme
 */
export declare class SpreadsheetTheme extends SpeakeasyBase {
    /**
     * Name of the primary font family.
     */
    primaryFontFamily?: string;
    /**
     * The spreadsheet theme color pairs. To update you must provide all theme color pairs.
     */
    themeColors?: ThemeColorPair[];
}
