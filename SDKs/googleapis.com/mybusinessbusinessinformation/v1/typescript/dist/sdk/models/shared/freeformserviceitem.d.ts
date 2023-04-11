import { SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";
/**
 * Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface.
 */
export declare class FreeFormServiceItem extends SpeakeasyBase {
    /**
     * Required. This field represents the category name (i.e. the category's stable ID). The `category` and `service_type_id` should match the possible combinations provided in the `Category` message.
     */
    category?: string;
    /**
     * Label to be used when displaying the price list, section, or item.
     */
    label?: Label;
}
