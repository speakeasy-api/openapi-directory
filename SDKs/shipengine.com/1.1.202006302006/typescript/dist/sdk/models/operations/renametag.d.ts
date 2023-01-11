import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RenameTagPathParams extends SpeakeasyBase {
    newTagName: string;
    tagName: string;
}
export declare class RenameTagRequest extends SpeakeasyBase {
    pathParams: RenameTagPathParams;
}
export declare class RenameTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyResponseBody?: string;
    errorResponseBody?: shared.ErrorResponseBody;
}
