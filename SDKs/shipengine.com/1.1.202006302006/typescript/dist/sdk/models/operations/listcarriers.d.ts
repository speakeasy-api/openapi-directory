import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCarriersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    getCarriersResponseBody?: shared.GetCarriersResponseBody;
}
