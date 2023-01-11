import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportProjectPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class ExportProjectRequest extends SpeakeasyBase {
    pathParams: ExportProjectPathParams;
}
export declare class ExportProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    projectExport?: shared.ProjectExport;
    statusCode: number;
}
