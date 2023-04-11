import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutInstitutionsIdRequestBody extends SpeakeasyBase {
    /**
     * A new currency code for the institution.
     */
    currencyCode?: string;
    /**
     * A new title for the institution.
     */
    title?: string;
}
export declare class PutInstitutionsIdRequest extends SpeakeasyBase {
    requestBody?: PutInstitutionsIdRequestBody;
    /**
     * The unique identifier of the institution.
     */
    id: number;
}
export declare class PutInstitutionsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    /**
     * Success
     */
    institution?: shared.Institution;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
