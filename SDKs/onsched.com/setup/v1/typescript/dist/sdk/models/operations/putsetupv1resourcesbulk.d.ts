import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1ResourcesBulkRequest extends SpeakeasyBase {
    /**
     * Resources update model
     */
    resourcesUpdateModel?: shared.ResourcesUpdateModel;
    /**
     * Google calendar authorization return url
     */
    googleAuthReturnUrl?: string;
    /**
     * Outlook calendar authorization return url
     */
    outlookAuthReturnUrl?: string;
}
export declare class PutSetupV1ResourcesBulkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceViewModels?: shared.ResourceViewModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
