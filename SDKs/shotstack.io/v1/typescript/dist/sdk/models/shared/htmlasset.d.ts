import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Place the HTML in one of nine predefined positions within the HTML area. <ul>
 *
 * @remarks
 *   <li>`top` - top (center)</li>
 *   <li>`topRight` - top right</li>
 *   <li>`right` - right (center)</li>
 *   <li>`bottomRight` - bottom right</li>
 *   <li>`bottom` - bottom (center)</li>
 *   <li>`bottomLeft` - bottom left</li>
 *   <li>`left` - left (center)</li>
 *   <li>`topLeft` - top left</li>
 *   <li>`center` - center</li>
 * </ul>
 */
export declare enum HtmlAssetPositionEnum {
    Top = "top",
    TopRight = "topRight",
    Right = "right",
    BottomRight = "bottomRight",
    Bottom = "bottom",
    BottomLeft = "bottomLeft",
    Left = "left",
    TopLeft = "topLeft",
    Center = "center"
}
/**
 * The HtmlAsset clip type lets you create text based layout and formatting using HTML and CSS. You can also set the height and width of a bounding box for the HTML content to sit within. Text and elements will wrap within the bounding box.
 */
export declare class HtmlAsset extends SpeakeasyBase {
    /**
     * Apply a background color behind the HTML bounding box using. Set the text color using hexadecimal  color notation. Transparency is supported by setting the first two characters of the hex string  (opposite to HTML), i.e. #80ffffff will be white with 50% transparency.
     */
    background?: string;
    /**
     * The CSS text string to apply styling to the HTML. See list of  [support CSS properties](https://shotstack.gitbook.io/docs/guides/architecting-an-application/html-support#supported-html-tags).
     */
    css?: string;
    /**
     * Set the width of the HTML asset bounding box in pixels. Text and elements will be masked if they exceed the  height of the bounding box.
     */
    height?: number;
    /**
     * The HTML text string. See list of [supported HTML tags](https://shotstack.gitbook.io/docs/guides/architecting-an-application/html-support#supported-html-tags).
     */
    html: string;
    /**
     * Place the HTML in one of nine predefined positions within the HTML area. <ul>
     *
     * @remarks
     *   <li>`top` - top (center)</li>
     *   <li>`topRight` - top right</li>
     *   <li>`right` - right (center)</li>
     *   <li>`bottomRight` - bottom right</li>
     *   <li>`bottom` - bottom (center)</li>
     *   <li>`bottomLeft` - bottom left</li>
     *   <li>`left` - left (center)</li>
     *   <li>`topLeft` - top left</li>
     *   <li>`center` - center</li>
     * </ul>
     */
    position?: HtmlAssetPositionEnum;
    /**
     * The type of asset - set to `html` for HTML.
     */
    type: string;
    /**
     * Set the width of the HTML asset bounding box in pixels. Text will wrap to fill the bounding box.
     */
    width?: number;
}
