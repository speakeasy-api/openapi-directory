import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCarrierByIdPathParams extends SpeakeasyBase {
    carrierId: string;
}
export declare class GetCarrierByIdRequest extends SpeakeasyBase {
    pathParams: GetCarrierByIdPathParams;
}
export declare class GetCarrierByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    getCarrierByIdResponseBody?: shared.GetCarrierByIdResponseBody;
}
