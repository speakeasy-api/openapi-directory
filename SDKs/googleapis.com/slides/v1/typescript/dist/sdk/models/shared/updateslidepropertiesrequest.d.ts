import { SpeakeasyBase } from "../../../internal/utils";
import { SlideProperties } from "./slideproperties";
/**
 * Updates the properties of a Slide.
 */
export declare class UpdateSlidePropertiesRequest extends SpeakeasyBase {
    /**
     * The fields that should be updated. At least one field must be specified. The root 'slideProperties' is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update whether a slide is skipped, set `fields` to `"isSkipped"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
     */
    fields?: string;
    /**
     * The object ID of the slide the update is applied to.
     */
    objectId?: string;
    /**
     * The properties of Page that are only relevant for pages with page_type SLIDE.
     */
    slideProperties?: SlideProperties;
}
