import { SpeakeasyBase } from "../../../internal/utils";
import { CustomAttribute } from "./customattribute";
import { Price } from "./price";
/**
 * Local inventory resource. For accepted attribute values, see the local product inventory feed specification.
 */
export declare class LocalInventory extends SpeakeasyBase {
    /**
     * Availability of the product. For accepted attribute values, see the local product inventory feed specification.
     */
    availability?: string;
    /**
     * A list of custom (merchant-provided) attributes. Can also be used to submit any attribute of the feed specification in its generic form, for example, `{ "name": "size type", "value": "regular" }`.
     */
    customAttributes?: CustomAttribute[];
    /**
     * In-store product location.
     */
    instoreProductLocation?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#localInventory`"
     */
    kind?: string;
    /**
     * Supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the local product inventory feed specification.
     */
    pickupMethod?: string;
    /**
     * Expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the local product inventory feed specification.
     */
    pickupSla?: string;
    price?: Price;
    /**
     * Quantity of the product. Must be nonnegative.
     */
    quantity?: number;
    salePrice?: Price;
    /**
     * A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates may be specified as 'null' if undecided.
     */
    salePriceEffectiveDate?: string;
    /**
     * Required. Store code of this local inventory resource.
     */
    storeCode?: string;
}
