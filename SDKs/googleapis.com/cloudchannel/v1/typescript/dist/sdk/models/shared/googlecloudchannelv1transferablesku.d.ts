import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Sku } from "./googlecloudchannelv1sku";
import { GoogleCloudChannelV1TransferEligibility } from "./googlecloudchannelv1transfereligibility";
/**
 * TransferableSku represents information a reseller needs to view existing provisioned services for a customer that they do not own. Read-only.
 */
export declare class GoogleCloudChannelV1TransferableSku extends SpeakeasyBase {
    /**
     * Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs.
     */
    legacySku?: GoogleCloudChannelV1Sku;
    /**
     * Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs.
     */
    sku?: GoogleCloudChannelV1Sku;
    /**
     * Specifies transfer eligibility of a SKU.
     */
    transferEligibility?: GoogleCloudChannelV1TransferEligibility;
}
