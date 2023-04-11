import { SpeakeasyBase } from "../../../internal/utils";
import { Autofit } from "./autofit";
import { Link } from "./link";
import { Outline } from "./outline";
import { Shadow } from "./shadow";
import { ShapeBackgroundFill } from "./shapebackgroundfill";
/**
 * The alignment of the content in the shape. If unspecified, the alignment is inherited from a parent placeholder if it exists. If the shape has no parent, the default alignment matches the alignment for new shapes created in the Slides editor.
 */
export declare enum ShapePropertiesContentAlignmentEnum {
    ContentAlignmentUnspecified = "CONTENT_ALIGNMENT_UNSPECIFIED",
    ContentAlignmentUnsupported = "CONTENT_ALIGNMENT_UNSUPPORTED",
    Top = "TOP",
    Middle = "MIDDLE",
    Bottom = "BOTTOM"
}
/**
 * The properties of a Shape. If the shape is a placeholder shape as determined by the placeholder field, then these properties may be inherited from a parent placeholder shape. Determining the rendered value of the property depends on the corresponding property_state field value. Any text autofit settings on the shape are automatically deactivated by requests that can impact how text fits in the shape.
 */
export declare class ShapeProperties extends SpeakeasyBase {
    /**
     * The autofit properties of a Shape.
     */
    autofit?: Autofit;
    /**
     * The alignment of the content in the shape. If unspecified, the alignment is inherited from a parent placeholder if it exists. If the shape has no parent, the default alignment matches the alignment for new shapes created in the Slides editor.
     */
    contentAlignment?: ShapePropertiesContentAlignmentEnum;
    /**
     * A hypertext link.
     */
    link?: Link;
    /**
     * The outline of a PageElement. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.
     */
    outline?: Outline;
    /**
     * The shadow properties of a page element. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.
     */
    shadow?: Shadow;
    /**
     * The shape background fill.
     */
    shapeBackgroundFill?: ShapeBackgroundFill;
}
