import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1ResourcesBulkRequest extends SpeakeasyBase {
    /**
     * Resources input model
     */
    resourcesInputModel?: shared.ResourcesInputModel;
    /**
     * Google calendar authorization return url
     */
    googleAuthReturnUrl?: string;
    /**
     * Outlook calendar authorization return url
     */
    outlookAuthReturnUrl?: string;
}
export declare class PostSetupV1ResourcesBulkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceViewModels?: shared.ResourceViewModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
