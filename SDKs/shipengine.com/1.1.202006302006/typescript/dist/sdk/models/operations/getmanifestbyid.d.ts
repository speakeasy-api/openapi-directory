import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetManifestByIdPathParams extends SpeakeasyBase {
    manifestId: string;
}
export declare class GetManifestByIdRequest extends SpeakeasyBase {
    pathParams: GetManifestByIdPathParams;
}
export declare class GetManifestByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    getManifestByIdResponseBody?: shared.GetManifestByIdResponseBody;
}
