import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateGlobalStyleGuideMultipartResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * FileTooLarge FileTooSmall NoFileUploaded MissingCorporateAccount
     */
    error?: shared.ErrorT;
    /**
     * Successful operation
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
