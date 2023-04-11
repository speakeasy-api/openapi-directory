import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1DataplexExternalTable } from "./googleclouddatacatalogv1dataplexexternaltable";
import { GoogleCloudDatacatalogV1DataplexSpec } from "./googleclouddatacatalogv1dataplexspec";
/**
 * Entry specification for a Dataplex table.
 */
export declare class GoogleCloudDatacatalogV1DataplexTableSpec extends SpeakeasyBase {
    /**
     * Common Dataplex fields.
     */
    dataplexSpec?: GoogleCloudDatacatalogV1DataplexSpec;
    /**
     * List of external tables registered by Dataplex in other systems based on the same underlying data. External tables allow to query this data in those systems.
     */
    externalTables?: GoogleCloudDatacatalogV1DataplexExternalTable[];
    /**
     * Indicates if the table schema is managed by the user or not.
     */
    userManaged?: boolean;
}
