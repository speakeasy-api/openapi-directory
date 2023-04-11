import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1ResourcesRequest extends SpeakeasyBase {
    /**
     * Resource input model
     */
    resourceInputModel?: shared.ResourceInputModel;
    /**
     * Google calendar authorization return url
     */
    googleAuthReturnUrl?: string;
    /**
     * Outlook calendar authorization return url
     */
    outlookAuthReturnUrl?: string;
}
export declare class PostSetupV1ResourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
