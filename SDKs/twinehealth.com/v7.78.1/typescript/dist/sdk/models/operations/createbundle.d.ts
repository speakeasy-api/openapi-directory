import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateBundleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    createBundleResponse?: shared.CreateBundleResponse;
    /**
     * Unauthorized
     */
    createOrUpdateErrorResponse?: shared.CreateOrUpdateErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
