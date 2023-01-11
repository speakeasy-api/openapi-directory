import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VoidLabelPathParams extends SpeakeasyBase {
    labelId: string;
}
export declare class VoidLabelRequest extends SpeakeasyBase {
    pathParams: VoidLabelPathParams;
}
export declare class VoidLabelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    voidLabelResponseBody?: shared.VoidLabelResponseBody;
}
