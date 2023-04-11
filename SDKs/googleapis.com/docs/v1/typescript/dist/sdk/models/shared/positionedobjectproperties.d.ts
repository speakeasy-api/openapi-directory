import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObject } from "./embeddedobject";
import { PositionedObjectPositioning } from "./positionedobjectpositioning";
/**
 * Properties of a PositionedObject.
 */
export declare class PositionedObjectProperties extends SpeakeasyBase {
    /**
     * An embedded object in the document.
     */
    embeddedObject?: EmbeddedObject;
    /**
     * The positioning of a PositionedObject. The positioned object is positioned relative to the beginning of the Paragraph it's tethered to.
     */
    positioning?: PositionedObjectPositioning;
}
