import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents information about a project export.
 */
export declare class ProjectExport extends SpeakeasyBase {
    /**
     * Estimated time this project will take to import, can change based on network connectivity and load between
     *
     * @remarks
     * source and destination regions.
     */
    estimatedImportTimeInMS?: number;
    /**
     * Count of images that will be exported.
     */
    imageCount?: number;
    /**
     * Count of iterations that will be exported.
     */
    iterationCount?: number;
    /**
     * Count of regions that will be exported.
     */
    regionCount?: number;
    /**
     * Count of tags that will be exported.
     */
    tagCount?: number;
    /**
     * Opaque token that should be passed to ImportProject to perform the import. This token grants access to import this
     *
     * @remarks
     * project to all that have the token.
     */
    token?: string;
}
