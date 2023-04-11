import { SpeakeasyBase } from "../../../internal/utils";
import { DualRegional } from "./dualregional";
import { MultiRegional } from "./multiregional";
import { Regional } from "./regional";
import { Usage } from "./usage";
/**
 * Specifies usage of Cloud Storage resources.
 */
export declare class CloudStorageWorkload extends SpeakeasyBase {
    /**
     * An amount of usage over a time frame.
     */
    dataRetrieval?: Usage;
    /**
     * An amount of usage over a time frame.
     */
    dataStored?: Usage;
    /**
     * Area contains dual locations.
     */
    dualRegion?: DualRegional;
    /**
     * Area contains multiple locations.
     */
    multiRegion?: MultiRegional;
    /**
     * An amount of usage over a time frame.
     */
    operationA?: Usage;
    /**
     * An amount of usage over a time frame.
     */
    operationB?: Usage;
    /**
     * Area contains only one location.
     */
    region?: Regional;
    /**
     * The [storage class](https://cloud.google.com/storage/docs/storage-classes#classes) of the data and operation. For example: "standard" or "nearline".
     */
    storageClass?: string;
}
