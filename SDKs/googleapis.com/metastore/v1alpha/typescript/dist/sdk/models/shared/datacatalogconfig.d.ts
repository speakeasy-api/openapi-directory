import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies how metastore metadata should be integrated with the Data Catalog service.
 */
export declare class DataCatalogConfig extends SpeakeasyBase {
    /**
     * Defines whether the metastore metadata should be synced to Data Catalog. The default value is to disable syncing metastore metadata to Data Catalog.
     */
    enabled?: boolean;
}
