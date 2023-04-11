import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1PhysicalSchema } from "./googleclouddatacatalogv1physicalschema";
/**
 * Common Dataplex fields.
 */
export declare class GoogleCloudDatacatalogV1DataplexSpec extends SpeakeasyBase {
    /**
     * Fully qualified resource name of an asset in Dataplex, to which the underlying data source (Cloud Storage bucket or BigQuery dataset) of the entity is attached.
     */
    asset?: string;
    /**
     * Compression format of the data, e.g., zip, gzip etc.
     */
    compressionFormat?: string;
    /**
     * Native schema used by a resource represented as an entry. Used by query engines for deserializing and parsing source data.
     */
    dataFormat?: GoogleCloudDatacatalogV1PhysicalSchema;
    /**
     * Project ID of the underlying Cloud Storage or BigQuery data. Note that this may not be the same project as the correspondingly Dataplex lake / zone / asset.
     */
    projectId?: string;
}
