import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogLineageV1ProcessLinkInfo } from "./googleclouddatacataloglineagev1processlinkinfo";
/**
 * Links associated with a specific process.
 */
export declare class GoogleCloudDatacatalogLineageV1ProcessLinks extends SpeakeasyBase {
    /**
     * An array containing link details objects of the links provided in the original request. A single process can result in creating multiple links. If any of the links you provide in the request are created by the same process, they all are included in this array.
     */
    links?: GoogleCloudDatacatalogLineageV1ProcessLinkInfo[];
    /**
     * The process name in the format of `projects/{project}/locations/{location}/processes/{process}`.
     */
    process?: string;
}
