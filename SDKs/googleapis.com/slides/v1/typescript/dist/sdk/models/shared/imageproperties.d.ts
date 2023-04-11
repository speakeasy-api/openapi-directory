import { SpeakeasyBase } from "../../../internal/utils";
import { CropProperties } from "./cropproperties";
import { Link } from "./link";
import { Outline } from "./outline";
import { Recolor } from "./recolor";
import { Shadow } from "./shadow";
/**
 * The properties of the Image.
 */
export declare class ImageProperties extends SpeakeasyBase {
    /**
     * The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.
     */
    brightness?: number;
    /**
     * The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.
     */
    contrast?: number;
    /**
     * The crop properties of an object enclosed in a container. For example, an Image. The crop properties is represented by the offsets of four edges which define a crop rectangle. The offsets are measured in percentage from the corresponding edges of the object's original bounding rectangle towards inside, relative to the object's original dimensions. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the object's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the object's original bounding rectangle. - If the left edge of the crop rectangle is on the right side of its right edge, the object will be flipped horizontally. - If the top edge of the crop rectangle is below its bottom edge, the object will be flipped vertically. - If all offsets and rotation angle is 0, the object is not cropped. After cropping, the content in the crop rectangle will be stretched to fit its container.
     */
    cropProperties?: CropProperties;
    /**
     * A hypertext link.
     */
    link?: Link;
    /**
     * The outline of a PageElement. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.
     */
    outline?: Outline;
    /**
     * A recolor effect applied on an image.
     */
    recolor?: Recolor;
    /**
     * The shadow properties of a page element. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.
     */
    shadow?: Shadow;
    /**
     * The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means completely transparent. This property is read-only.
     */
    transparency?: number;
}
