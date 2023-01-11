import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePackageTypePathParams extends SpeakeasyBase {
    packageId: string;
}
export declare class DeletePackageTypeRequest extends SpeakeasyBase {
    pathParams: DeletePackageTypePathParams;
}
export declare class DeletePackageTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyResponseBody?: string;
    errorResponseBody?: shared.ErrorResponseBody;
}
