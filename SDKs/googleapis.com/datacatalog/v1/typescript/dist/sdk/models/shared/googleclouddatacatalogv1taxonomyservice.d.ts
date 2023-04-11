import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Google Cloud service name.
 */
export declare enum GoogleCloudDatacatalogV1TaxonomyServiceNameEnum {
    ManagingSystemUnspecified = "MANAGING_SYSTEM_UNSPECIFIED",
    ManagingSystemDataplex = "MANAGING_SYSTEM_DATAPLEX",
    ManagingSystemOther = "MANAGING_SYSTEM_OTHER"
}
/**
 * The source system of the Taxonomy.
 */
export declare class GoogleCloudDatacatalogV1TaxonomyService extends SpeakeasyBase {
    /**
     * P4SA Identity of the service.
     */
    identity?: string;
    /**
     * The Google Cloud service name.
     */
    name?: GoogleCloudDatacatalogV1TaxonomyServiceNameEnum;
}
