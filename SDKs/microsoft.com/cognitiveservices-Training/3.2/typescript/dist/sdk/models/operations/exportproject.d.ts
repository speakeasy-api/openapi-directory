import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportProjectRequest extends SpeakeasyBase {
    /**
     * The project id of the project to export.
     */
    projectId: string;
}
export declare class ExportProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    /**
     * OK
     */
    projectExport?: shared.ProjectExport;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
