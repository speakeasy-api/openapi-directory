import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListVerificationTemplateServerList: readonly ["https://verify.twilio.com"];
export declare class ListVerificationTemplateSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListVerificationTemplateRequest extends SpeakeasyBase {
    /**
     * String filter used to query templates with a given friendly name
     */
    friendlyName?: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
export declare class ListVerificationTemplateListVerificationTemplateResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListVerificationTemplateListVerificationTemplateResponse extends SpeakeasyBase {
    meta?: ListVerificationTemplateListVerificationTemplateResponseMeta;
    templates?: shared.VerifyV2VerificationTemplate[];
}
export declare class ListVerificationTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listVerificationTemplateResponse?: ListVerificationTemplateListVerificationTemplateResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
