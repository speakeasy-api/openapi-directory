import { SpeakeasyBase } from "../../../internal/utils";
import { VideoProperties } from "./videoproperties";
/**
 * Update the properties of a Video.
 */
export declare class UpdateVideoPropertiesRequest extends SpeakeasyBase {
    /**
     * The fields that should be updated. At least one field must be specified. The root `videoProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the video outline color, set `fields` to `"outline.outlineFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
     */
    fields?: string;
    /**
     * The object ID of the video the updates are applied to.
     */
    objectId?: string;
    /**
     * The properties of the Video.
     */
    videoProperties?: VideoProperties;
}
