import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCompanyTimeOffsIdRequest extends SpeakeasyBase {
    /**
     * ID of the absence period to delete
     */
    id: number;
}
export declare class DeleteCompanyTimeOffsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not found response
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Success response
     */
    response?: shared.Response;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
