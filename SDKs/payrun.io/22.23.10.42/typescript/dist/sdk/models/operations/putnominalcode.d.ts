import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutNominalCodeRequest extends SpeakeasyBase {
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
     * The nominal code object.
     */
    nominalCode: shared.NominalCode;
    /**
     * The nominal code unique identifier. E.g. NOM001
     */
    nominalCodeId: string;
}
export declare class PutNominalCodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The nominal code object.
     */
    nominalCode?: shared.NominalCode;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
