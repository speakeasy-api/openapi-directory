import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ParseAddressRequest extends SpeakeasyBase {
    request: shared.ParseAddressRequestBody;
}
export declare class ParseAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    parseAddressResponseBody?: shared.ParseAddressResponseBody;
}
