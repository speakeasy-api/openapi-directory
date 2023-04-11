import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteStyleGuideRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    projectId: number;
    /**
     * Style Guide ID
     */
    styleGuideId: number;
}
export declare class DeleteStyleGuideResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * StyleGuideNotFound
     */
    error?: shared.ErrorT;
    /**
     * Style guide deleted successfully
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
