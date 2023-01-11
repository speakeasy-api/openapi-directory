import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A create manifest request body
**/
export declare class CreateManifestByObjectRequestBody extends SpeakeasyBase {
    carrierId: string;
    excludedLabelIds?: string[];
    labelIds?: string[];
    shipDate: Date;
    warehouseId: string;
}
