import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProjectResponse extends SpeakeasyBase {
    /**
     * Id of the created project.
     */
    projectId?: number;
    /**
     * Number of the created project.
     */
    projectNumber?: number;
    /**
     * Id of the result_file. This id must be specified to create the result_file_url.
     */
    resultFileId?: string;
}
