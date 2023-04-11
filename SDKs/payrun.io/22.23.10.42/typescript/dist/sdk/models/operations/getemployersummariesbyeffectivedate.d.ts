import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEmployerSummariesByEffectiveDateRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The effective date to be applied. E.g 2016-04-06
     */
    effectiveDate: Date;
}
export declare class GetEmployerSummariesByEffectiveDateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The link collection object.
     */
    linkCollection?: shared.LinkCollection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
