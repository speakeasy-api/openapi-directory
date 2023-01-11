import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPackageTypeByIdPathParams extends SpeakeasyBase {
    packageId: string;
}
export declare class GetPackageTypeByIdRequest extends SpeakeasyBase {
    pathParams: GetPackageTypeByIdPathParams;
}
export declare class GetPackageTypeByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    getPackageTypeByIdResponseBody?: shared.GetPackageTypeByIdResponseBody;
}
