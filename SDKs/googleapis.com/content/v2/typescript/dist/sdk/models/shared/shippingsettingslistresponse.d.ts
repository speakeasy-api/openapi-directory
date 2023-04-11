import { SpeakeasyBase } from "../../../internal/utils";
import { ShippingSettings } from "./shippingsettings";
/**
 * Successful response
 */
export declare class ShippingsettingsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsListResponse".
     */
    kind?: string;
    /**
     * The token for the retrieval of the next page of shipping settings.
     */
    nextPageToken?: string;
    resources?: ShippingSettings[];
}
