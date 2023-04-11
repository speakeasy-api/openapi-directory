import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the result
 */
export declare enum IngestionResultStatusEnum {
    Error = "Error",
    SuccessWarning = "SuccessWarning",
    Success = "Success"
}
/**
 * This class defines the IngestionResult on the Publish API
 */
export declare class IngestionResult extends SpeakeasyBase {
    /**
     * Id of the entity ingested in the discovery api
     */
    id?: string;
    /**
     * List properties that are ignored in the validation
     */
    ignoredProperties?: Record<string, Record<string, any>>;
    /**
     * List of invalid properties
     */
    invalidProperties?: Record<string, Record<string, any>>;
    /**
     * List of invalid values
     */
    invalidValues?: Record<string, Record<string, any>>;
    /**
     * List of properties that should be present in your entity to ease its dicovery
     */
    missingProperties?: Record<string, Record<string, any>>;
    /**
     * Status of the result
     */
    status: IngestionResultStatusEnum;
    /**
     * List of unknown properties that will be dropped
     */
    unknownProperties?: Record<string, Record<string, any>>;
}
