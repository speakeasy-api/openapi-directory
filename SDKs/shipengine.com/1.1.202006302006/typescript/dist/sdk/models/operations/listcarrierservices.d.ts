import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCarrierServicesPathParams extends SpeakeasyBase {
    carrierId: string;
}
export declare class ListCarrierServicesRequest extends SpeakeasyBase {
    pathParams: ListCarrierServicesPathParams;
}
export declare class ListCarrierServicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    listCarrierServicesResponseBody?: shared.ListCarrierServicesResponseBody;
}
