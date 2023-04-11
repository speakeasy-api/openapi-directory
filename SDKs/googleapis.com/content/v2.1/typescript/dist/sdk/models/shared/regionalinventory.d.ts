import { SpeakeasyBase } from "../../../internal/utils";
import { CustomAttribute } from "./customattribute";
import { Price } from "./price";
/**
 * Regional inventory resource. contains the regional name and all attributes which are overridden for the specified region.
 */
export declare class RegionalInventory extends SpeakeasyBase {
    /**
     * The availability of the product.
     */
    availability?: string;
    /**
     * A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form.
     */
    customAttributes?: CustomAttribute[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#regionalInventory`".
     */
    kind?: string;
    price?: Price;
    /**
     * The ID uniquely identifying each region.
     */
    regionId?: string;
    salePrice?: Price;
    /**
     * A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as 'null' if undecided.
     */
    salePriceEffectiveDate?: string;
}
