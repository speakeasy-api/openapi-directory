import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaProductInput } from "./googlecloudretailv2betaproduct";
/**
 * Request message for ProductService.SetInventory method.
 */
export declare class GoogleCloudRetailV2betaSetInventoryRequestInput extends SpeakeasyBase {
    /**
     * If set to true, and the Product with name Product.name is not found, the inventory update will still be processed and retained for at most 1 day until the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found.
     */
    allowMissing?: boolean;
    /**
     * Product captures all metadata information of items to be recommended or searched.
     */
    inventory?: GoogleCloudRetailV2betaProductInput;
    /**
     * Indicates which inventory fields in the provided Product to update. At least one field must be provided. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned and the entire update will be ignored.
     */
    setMask?: string;
    /**
     * The time when the request is issued, used to prevent out-of-order updates on inventory fields with the last update time recorded. If not provided, the internal system time will be used.
     */
    setTime?: string;
}
