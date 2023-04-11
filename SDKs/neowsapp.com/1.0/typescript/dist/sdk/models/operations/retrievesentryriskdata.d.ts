import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveSentryRiskDataRequest extends SpeakeasyBase {
    /**
     * show current list of Sentry objects, or show removed Sentry objects
     */
    isActive?: boolean;
    /**
     * page
     */
    page?: number;
    /**
     * size
     */
    size?: number;
}
export declare class RetrieveSentryRiskDataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    sentryObjectPagingDto?: shared.SentryObjectPagingDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
