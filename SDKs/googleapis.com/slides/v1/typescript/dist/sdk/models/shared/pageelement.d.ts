import { SpeakeasyBase } from "../../../internal/utils";
import { AffineTransform } from "./affinetransform";
import { Group } from "./group";
import { Image } from "./image";
import { Line } from "./line";
import { Shape } from "./shape";
import { SheetsChart } from "./sheetschart";
import { Size } from "./size";
import { Table } from "./table";
import { Video } from "./video";
import { WordArt } from "./wordart";
/**
 * A visual element rendered on a page.
 */
export declare class PageElement extends SpeakeasyBase {
    /**
     * The description of the page element. Combined with title to display alt text. The field is not supported for Group elements.
     */
    description?: string;
    /**
     * A PageElement kind representing a joined collection of PageElements.
     */
    elementGroup?: Group;
    /**
     * A PageElement kind representing an image.
     */
    image?: Image;
    /**
     * A PageElement kind representing a non-connector line, straight connector, curved connector, or bent connector.
     */
    line?: Line;
    /**
     * The object ID for this page element. Object IDs used by google.apps.slides.v1.Page and google.apps.slides.v1.PageElement share the same namespace.
     */
    objectId?: string;
    /**
     * A PageElement kind representing a generic shape that does not have a more specific classification.
     */
    shape?: Shape;
    /**
     * A PageElement kind representing a linked chart embedded from Google Sheets.
     */
    sheetsChart?: SheetsChart;
    /**
     * A width and height.
     */
    size?: Size;
    /**
     * A PageElement kind representing a table.
     */
    table?: Table;
    /**
     * The title of the page element. Combined with description to display alt text. The field is not supported for Group elements.
     */
    title?: string;
    /**
     * AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ] to transform source coordinates (x,y) into destination coordinates (x', y') according to: x' x = shear_y scale_y translate_y 1 [ 1 ] After transformation, x' = scale_x * x + shear_x * y + translate_x; y' = scale_y * y + shear_y * x + translate_y; This message is therefore composed of these six matrix elements.
     */
    transform?: AffineTransform;
    /**
     * A PageElement kind representing a video.
     */
    video?: Video;
    /**
     * A PageElement kind representing word art.
     */
    wordArt?: WordArt;
}
