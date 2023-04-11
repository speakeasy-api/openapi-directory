import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogObject } from "./catalogobject";
/**
 * A batch of catalog objects.
 */
export declare class CatalogObjectBatch extends SpeakeasyBase {
    /**
     * A list of CatalogObjects belonging to this batch.
     */
    objects: CatalogObject[];
}
