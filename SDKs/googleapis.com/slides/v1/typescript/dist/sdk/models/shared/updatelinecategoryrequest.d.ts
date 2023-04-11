import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The line category to update to. The exact line type is determined based on the category to update to and how it's routed to connect to other page elements.
 */
export declare enum UpdateLineCategoryRequestLineCategoryEnum {
    LineCategoryUnspecified = "LINE_CATEGORY_UNSPECIFIED",
    Straight = "STRAIGHT",
    Bent = "BENT",
    Curved = "CURVED"
}
/**
 * Updates the category of a line.
 */
export declare class UpdateLineCategoryRequest extends SpeakeasyBase {
    /**
     * The line category to update to. The exact line type is determined based on the category to update to and how it's routed to connect to other page elements.
     */
    lineCategory?: UpdateLineCategoryRequestLineCategoryEnum;
    /**
     * The object ID of the line the update is applied to. Only a line with a category indicating it is a "connector" can be updated. The line may be rerouted after updating its category.
     */
    objectId?: string;
}
