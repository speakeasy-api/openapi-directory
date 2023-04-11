import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeletePensionRevisionRequest extends SpeakeasyBase {
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
    /**
     * The employers' unique identifier. E.g ER001
     */
    employerId: string;
    /**
     * The pensions' unique identifier. E.g PEN001
     */
    pensionId: string;
}
export declare class DeletePensionRevisionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
