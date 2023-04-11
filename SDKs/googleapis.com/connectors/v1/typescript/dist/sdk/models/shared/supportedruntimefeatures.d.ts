import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Supported runtime features of a connector version. This is passed to the management layer to add a new connector version by the connector developer. Details about how this proto is passed to the management layer is covered in this doc - go/runtime-manifest.
 */
export declare class SupportedRuntimeFeatures extends SpeakeasyBase {
    /**
     * Specifies if the connector supports action apis like 'executeAction'.
     */
    actionApis?: boolean;
    /**
     * Specifies if the connector supports entity apis like 'createEntity'.
     */
    entityApis?: boolean;
    /**
     * Specifies if the connector supports 'ExecuteSqlQuery' operation.
     */
    sqlQuery?: boolean;
}
