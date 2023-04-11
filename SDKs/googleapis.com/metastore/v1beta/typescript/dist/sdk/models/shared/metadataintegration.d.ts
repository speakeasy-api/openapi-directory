import { SpeakeasyBase } from "../../../internal/utils";
import { DataCatalogConfig } from "./datacatalogconfig";
import { DataplexConfig } from "./dataplexconfig";
/**
 * Specifies how metastore metadata should be integrated with external services.
 */
export declare class MetadataIntegration extends SpeakeasyBase {
    /**
     * Specifies how metastore metadata should be integrated with the Data Catalog service.
     */
    dataCatalogConfig?: DataCatalogConfig;
    /**
     * Specifies how metastore metadata should be integrated with the Dataplex service.
     */
    dataplexConfig?: DataplexConfig;
}
