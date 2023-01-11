import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPackageTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    listPackageTypesResponseBody?: shared.ListPackageTypesResponseBody;
}
