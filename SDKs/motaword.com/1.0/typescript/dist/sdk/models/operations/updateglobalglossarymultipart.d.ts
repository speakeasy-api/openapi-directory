import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateGlobalGlossaryMultipartResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * FileTooLarge FileTooSmall NoFileUploaded
     */
    error?: shared.ErrorT;
    /**
     * Successful operation
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
