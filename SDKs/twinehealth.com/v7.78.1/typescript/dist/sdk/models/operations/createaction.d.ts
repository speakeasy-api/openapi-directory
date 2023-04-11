import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateActionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    createActionResponse?: shared.CreateActionResponse;
    /**
     * Unauthorized
     */
    createOrUpdateErrorResponse?: shared.CreateOrUpdateErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
