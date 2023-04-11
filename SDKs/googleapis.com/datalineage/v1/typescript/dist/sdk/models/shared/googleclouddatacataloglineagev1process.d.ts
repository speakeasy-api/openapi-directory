import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogLineageV1Origin } from "./googleclouddatacataloglineagev1origin";
/**
 * A process is the definition of a data transformation operation.
 */
export declare class GoogleCloudDatacatalogLineageV1Process extends SpeakeasyBase {
    /**
     * Optional. The attributes of the process. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the process). Up to 100 attributes are allowed.
     */
    attributes?: Record<string, any>;
    /**
     * Optional. A human-readable name you can set to display in a user interface. Must be not longer than 200 characters and only contain UTF-8 letters or numbers, spaces or characters like `_-:&.`
     */
    displayName?: string;
    /**
     * Immutable. The resource name of the lineage process. Format: `projects/{project}/locations/{location}/processes/{process}`. Can be specified or auto-assigned. {process} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`
     */
    name?: string;
    /**
     * Origin of a process.
     */
    origin?: GoogleCloudDatacatalogLineageV1Origin;
}
