import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePackageTypeRequest extends SpeakeasyBase {
    request: shared.CreatePackageTypeRequestBody;
}
export declare class CreatePackageTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createPackageTypeResponseBody?: shared.CreatePackageTypeResponseBody;
    errorResponseBody?: shared.ErrorResponseBody;
}
