import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A create manifest request body
 */
export declare class CreateManifestByObjectRequestBody extends SpeakeasyBase {
    /**
     * A string that uniquely identifies the carrier
     */
    carrierId: string;
    /**
     * The list of label ids to exclude from the manifest
     */
    excludedLabelIds?: string[];
    /**
     * The list of label ids to include for the manifest
     */
    labelIds?: string[];
    /**
     * The ship date that the shipment will be sent out on
     */
    shipDate: Date;
    /**
     * A string that uniquely identifies the warehouse
     */
    warehouseId: string;
}
