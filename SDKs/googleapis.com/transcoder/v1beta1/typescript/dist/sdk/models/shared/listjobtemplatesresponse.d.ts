import { SpeakeasyBase } from "../../../internal/utils";
import { JobTemplate } from "./jobtemplate";
/**
 * Response message for `TranscoderService.ListJobTemplates`.
 */
export declare class ListJobTemplatesResponse extends SpeakeasyBase {
    /**
     * List of job templates in the specified region.
     */
    jobTemplates?: JobTemplate[];
    /**
     * The pagination token.
     */
    nextPageToken?: string;
}
