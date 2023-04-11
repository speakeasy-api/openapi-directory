import { SpeakeasyBase } from "../../../internal/utils";
import { CarriersCarrier } from "./carrierscarrier";
/**
 * Successful response
 */
export declare class ShippingsettingsGetSupportedCarriersResponse extends SpeakeasyBase {
    /**
     * A list of supported carriers. May be empty.
     */
    carriers?: CarriersCarrier[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsGetSupportedCarriersResponse`".
     */
    kind?: string;
}
