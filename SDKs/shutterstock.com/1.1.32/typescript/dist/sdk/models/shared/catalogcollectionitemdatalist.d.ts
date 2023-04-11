import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogCollectionItem } from "./catalogcollectionitem";
/**
 * List of catalog collection items
 */
export declare class CatalogCollectionItemDataList extends SpeakeasyBase {
    /**
     * List of catalog collection items
     */
    data: CatalogCollectionItem[];
    page: number;
    perPage: number;
    totalCount: number;
}
