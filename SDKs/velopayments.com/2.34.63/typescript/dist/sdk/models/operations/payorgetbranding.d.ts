import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PayorGetBrandingRequest extends SpeakeasyBase {
    /**
     * The Payor Id
     */
    payorId: string;
}
export declare class PayorGetBrandingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Payor Id Not Found
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * HTTP Ok, key created
     */
    payorBrandingResponse?: shared.PayorBrandingResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid request. See Error message payload for details of failure
     */
    inlineResponse400?: shared.InlineResponse400;
    /**
     * The authentication does not have permissions to access the resource
     *
     * @remarks
     * This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions
     *
     */
    inlineResponse403?: shared.InlineResponse403;
}
