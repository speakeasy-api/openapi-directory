import { SpeakeasyBase } from "../../../internal/utils";
import { ColorScheme } from "./colorscheme";
import { PageBackgroundFill } from "./pagebackgroundfill";
/**
 * The properties of the Page. The page will inherit properties from the parent page. Depending on the page type the hierarchy is defined in either SlideProperties or LayoutProperties.
 */
export declare class PageProperties extends SpeakeasyBase {
    /**
     * The palette of predefined colors for a page.
     */
    colorScheme?: ColorScheme;
    /**
     * The page background fill.
     */
    pageBackgroundFill?: PageBackgroundFill;
}
