import { SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
import { Label } from "./label";
/**
 * Optional. Type of the current price list section. Default value is FOOD.
 */
export declare enum SectionSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    Food = "FOOD",
    Services = "SERVICES"
}
/**
 * A section of the price list containing one or more items.
 */
export declare class Section extends SpeakeasyBase {
    /**
     * Items that are contained within this section of the price list.
     */
    items?: Item[];
    /**
     * Required. Language-tagged labels for the section. We recommend that section names and descriptions be 140 characters or less. At least one set of labels is required.
     */
    labels?: Label[];
    /**
     * Required. ID for the section. Price list, section, and item IDs cannot be duplicated within this Location.
     */
    sectionId?: string;
    /**
     * Optional. Type of the current price list section. Default value is FOOD.
     */
    sectionType?: SectionSectionTypeEnum;
}
