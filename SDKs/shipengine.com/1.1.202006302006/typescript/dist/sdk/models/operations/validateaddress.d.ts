import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ValidateAddressRequest extends SpeakeasyBase {
    request: shared.AddressToValidate[];
}
export declare class ValidateAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    validateAddressResponseBody?: shared.ValidateAddressResponseBody[];
}
