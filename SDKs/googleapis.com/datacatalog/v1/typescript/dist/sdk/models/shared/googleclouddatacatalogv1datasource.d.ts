import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1StorageProperties } from "./googleclouddatacatalogv1storageproperties";
/**
 * Service that physically stores the data.
 */
export declare enum GoogleCloudDatacatalogV1DataSourceServiceEnum {
    ServiceUnspecified = "SERVICE_UNSPECIFIED",
    CloudStorage = "CLOUD_STORAGE",
    Bigquery = "BIGQUERY"
}
/**
 * Physical location of an entry.
 */
export declare class GoogleCloudDatacatalogV1DataSource extends SpeakeasyBase {
    /**
     * Full name of a resource as defined by the service. For example: `//bigquery.googleapis.com/projects/{PROJECT_ID}/locations/{LOCATION}/datasets/{DATASET_ID}/tables/{TABLE_ID}`
     */
    resource?: string;
    /**
     * Service that physically stores the data.
     */
    service?: GoogleCloudDatacatalogV1DataSourceServiceEnum;
    /**
     * Output only. Data Catalog entry name, if applicable.
     */
    sourceEntry?: string;
    /**
     * Details the properties of the underlying storage.
     */
    storageProperties?: GoogleCloudDatacatalogV1StorageProperties;
}
/**
 * Physical location of an entry.
 */
export declare class GoogleCloudDatacatalogV1DataSourceInput extends SpeakeasyBase {
    /**
     * Full name of a resource as defined by the service. For example: `//bigquery.googleapis.com/projects/{PROJECT_ID}/locations/{LOCATION}/datasets/{DATASET_ID}/tables/{TABLE_ID}`
     */
    resource?: string;
    /**
     * Service that physically stores the data.
     */
    service?: GoogleCloudDatacatalogV1DataSourceServiceEnum;
    /**
     * Details the properties of the underlying storage.
     */
    storageProperties?: GoogleCloudDatacatalogV1StorageProperties;
}
