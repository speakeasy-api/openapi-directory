import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCorporaRequest extends SpeakeasyBase {
    adminListCorporaRequest: shared.AdminListCorporaRequest;
    /**
     * The Customer ID to use for the request.
     */
    customerId: number;
}
export declare class ListCorporaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful response.
     */
    adminListCorporaResponse?: shared.AdminListCorporaResponse;
    /**
     * An unexpected error response.
     */
    googlerpcStatus?: shared.GooglerpcStatus;
}
