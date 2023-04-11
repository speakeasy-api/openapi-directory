import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRtiTransactionSummaryFromEmployerRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The employers' unique identifier. E.g ER001
     */
    employerId: string;
    /**
     * The RTI transaction unique identifier. E.g. FPS001
     */
    rtiTransactionId: string;
}
export declare class GetRtiTransactionSummaryFromEmployerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The rti transaction base object.
     */
    rtiTransactionBase?: shared.RtiTransactionBase;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
