import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RecreateProjectRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    id: number;
}
export declare class RecreateProjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * UnauthorizedUser
     */
    error?: shared.ErrorT;
    /**
     * Project recreation process started successfully
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
