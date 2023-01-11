import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateShipmentsRequest extends SpeakeasyBase {
    request: shared.CreateShipmentsRequestBodyInput;
}
export declare class CreateShipmentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createShipmentsResponseBody?: shared.CreateShipmentsResponseBody;
    errorResponseBody?: shared.ErrorResponseBody;
}
