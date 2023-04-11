import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1ResourcesIdRequest extends SpeakeasyBase {
    /**
     * Resource Update Model
     */
    resourceUpdateModel?: shared.ResourceUpdateModel;
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
export declare class PutSetupV1ResourcesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
