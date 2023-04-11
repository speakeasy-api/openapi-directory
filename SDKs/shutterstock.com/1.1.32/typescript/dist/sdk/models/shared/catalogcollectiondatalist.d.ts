import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogCollection } from "./catalogcollection";
/**
 * List of catalog collections
 */
export declare class CatalogCollectionDataList extends SpeakeasyBase {
    /**
     * List of catalog collections
     */
    data: CatalogCollection[];
    page: number;
    perPage: number;
    totalCount: number;
}
