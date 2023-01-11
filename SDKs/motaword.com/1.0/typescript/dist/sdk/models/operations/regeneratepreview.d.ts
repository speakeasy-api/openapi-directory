import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegeneratePreviewPathParams extends SpeakeasyBase {
    documentId: number;
}
export declare class RegeneratePreviewRequest extends SpeakeasyBase {
    pathParams: RegeneratePreviewPathParams;
}
export declare class RegeneratePreviewResponse extends SpeakeasyBase {
    contentType: string;
    regeneratePreviewResponse?: shared.RegeneratePreviewResponse;
    statusCode: number;
}
