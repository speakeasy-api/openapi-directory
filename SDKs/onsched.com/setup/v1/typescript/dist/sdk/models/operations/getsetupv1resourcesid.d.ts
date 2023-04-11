import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1ResourcesIdRequest extends SpeakeasyBase {
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
export declare class GetSetupV1ResourcesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
