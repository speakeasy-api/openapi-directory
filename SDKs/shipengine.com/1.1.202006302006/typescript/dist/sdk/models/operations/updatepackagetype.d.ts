import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePackageTypePathParams extends SpeakeasyBase {
    packageId: string;
}
export declare class UpdatePackageTypeRequest extends SpeakeasyBase {
    pathParams: UpdatePackageTypePathParams;
    request: shared.UpdatePackageTypeRequestBody;
}
export declare class UpdatePackageTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyResponseBody?: string;
    errorResponseBody?: shared.ErrorResponseBody;
}
