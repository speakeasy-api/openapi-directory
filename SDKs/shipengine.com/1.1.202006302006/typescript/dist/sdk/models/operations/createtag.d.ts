import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTagPathParams extends SpeakeasyBase {
    tagName: string;
}
export declare class CreateTagRequest extends SpeakeasyBase {
    pathParams: CreateTagPathParams;
}
export declare class CreateTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createTagResponseBody?: shared.CreateTagResponseBody;
    errorResponseBody?: shared.ErrorResponseBody;
}
