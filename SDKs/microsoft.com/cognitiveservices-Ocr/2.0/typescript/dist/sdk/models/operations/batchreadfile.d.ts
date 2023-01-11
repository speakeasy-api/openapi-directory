import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchReadFileRequest extends SpeakeasyBase {
    request: shared.ImageUrl;
}
export declare class BatchReadFileResponse extends SpeakeasyBase {
    computerVisionError?: shared.ComputerVisionError;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
