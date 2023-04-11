import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object containing the fields to POST for the request.
 *
 * @remarks
 *
 * See the corresponding object definition for field details.
 */
export declare class UpdateItemTaxesRequest extends SpeakeasyBase {
    /**
     * IDs for the CatalogItems associated with the CatalogTax objects being updated.
     */
    itemIds: string[];
    /**
     * IDs of the CatalogTax objects to disable.
     */
    taxesToDisable?: string[];
    /**
     * IDs of the CatalogTax objects to enable.
     */
    taxesToEnable?: string[];
}
