import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTagPathParams extends SpeakeasyBase {
    tagName: string;
}
export declare class DeleteTagRequest extends SpeakeasyBase {
    pathParams: DeleteTagPathParams;
}
export declare class DeleteTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyResponseBody?: string;
    errorResponseBody?: shared.ErrorResponseBody;
}
