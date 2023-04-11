import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { EmbeddedObjectBorder } from "./embeddedobjectborder";
import { ImageProperties } from "./imageproperties";
import { LinkedContentReference } from "./linkedcontentreference";
import { Size } from "./size";
/**
 * An embedded object in the document.
 */
export declare class EmbeddedObject extends SpeakeasyBase {
    /**
     * The description of the embedded object. The `title` and `description` are both combined to display alt text.
     */
    description?: string;
    /**
     * The properties of an embedded drawing and used to differentiate the object type. An embedded drawing is one that's created and edited within a document. Note that extensive details are not supported.
     */
    embeddedDrawingProperties?: Record<string, any>;
    /**
     * A border around an EmbeddedObject.
     */
    embeddedObjectBorder?: EmbeddedObjectBorder;
    /**
     * The properties of an image.
     */
    imageProperties?: ImageProperties;
    /**
     * A reference to the external linked source content.
     */
    linkedContentReference?: LinkedContentReference;
    /**
     * A magnitude in a single direction in the specified units.
     */
    marginBottom?: Dimension;
    /**
     * A magnitude in a single direction in the specified units.
     */
    marginLeft?: Dimension;
    /**
     * A magnitude in a single direction in the specified units.
     */
    marginRight?: Dimension;
    /**
     * A magnitude in a single direction in the specified units.
     */
    marginTop?: Dimension;
    /**
     * A width and height.
     */
    size?: Size;
    /**
     * The title of the embedded object. The `title` and `description` are both combined to display alt text.
     */
    title?: string;
}
