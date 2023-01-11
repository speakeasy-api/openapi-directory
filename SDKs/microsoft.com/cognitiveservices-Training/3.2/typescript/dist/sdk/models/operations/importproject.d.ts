import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportProjectQueryParams extends SpeakeasyBase {
    token: string;
}
export declare class ImportProjectRequest extends SpeakeasyBase {
    queryParams: ImportProjectQueryParams;
}
export declare class ImportProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    project?: shared.Project;
    statusCode: number;
}
