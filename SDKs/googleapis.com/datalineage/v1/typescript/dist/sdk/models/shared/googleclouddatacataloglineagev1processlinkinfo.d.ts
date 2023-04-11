import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Link details.
 */
export declare class GoogleCloudDatacatalogLineageV1ProcessLinkInfo extends SpeakeasyBase {
    /**
     * The end of the last event establishing this link-process tuple.
     */
    endTime?: string;
    /**
     * The name of the link in the format of `projects/{project}/locations/{location}/links/{link}`.
     */
    link?: string;
    /**
     * The start of the first event establishing this link-process tuple.
     */
    startTime?: string;
}
