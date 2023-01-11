import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectInsurerRequest extends SpeakeasyBase {
    request: shared.ConnectInsurerRequestBody;
}
export declare class ConnectInsurerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    connectInsurerResponseBody?: Record<string, any>;
    errorResponseBody?: shared.ErrorResponseBody;
}
