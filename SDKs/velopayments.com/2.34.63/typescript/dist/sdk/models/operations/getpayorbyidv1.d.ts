import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPayorByIdV1Request extends SpeakeasyBase {
    /**
     * The Payor Id
     */
    payorId: string;
}
export declare class GetPayorByIdV1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Payor Id Not Found
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Get Payor Details
     */
    payorV1?: shared.PayorV1;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The authentication does not have permissions to access the resource
     *
     * @remarks
     * This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions
     *
     */
    inlineResponse403?: shared.InlineResponse403;
}
