import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1ResourcesIdRecoverRequest extends SpeakeasyBase {
    /**
     * Google calendar authorization return url
     */
    googleAuthReturnUrl?: string;
    /**
     * id of resource object
     */
    id: string;
    /**
     * Outlook calendar authorization return url
     */
    outlookAuthReturnUrl?: string;
}
export declare class PutSetupV1ResourcesIdRecoverResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
