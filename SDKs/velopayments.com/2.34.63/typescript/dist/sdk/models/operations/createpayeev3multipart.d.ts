import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Post payees to create.
 */
export declare class CreatePayeeV3MultipartFormData extends SpeakeasyBase {
    /**
     * CSV File of payee data
     */
    file?: shared.CreatePayeesCSVRequestV3[];
    payorId?: string;
}
export declare class CreatePayeeV3MultipartResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * HTTP Created. Body created only on CSV requests
     */
    createPayeesCSVResponseV3?: shared.CreatePayeesCSVResponseV3;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid request. See Error message payload for details of failure
     */
    inlineResponse400?: shared.InlineResponse400;
    /**
     * Invalid access token. May be expired or invalid
     */
    inlineResponse401?: shared.InlineResponse401;
    /**
     * The authentication does not have permissions to access the resource
     *
     * @remarks
     * This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions
     *
     */
    inlineResponse403?: shared.InlineResponse403;
    /**
     * The resource was not found or is no longer available
     *
     * @remarks
     *
     */
    inlineResponse404?: shared.InlineResponse404;
}
