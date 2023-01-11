import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisconnectInsurerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    disconnectInsurerResponseBody?: Record<string, any>;
    errorResponseBody?: shared.ErrorResponseBody;
}
