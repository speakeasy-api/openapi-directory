import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostUsersIdInstitutionsRequestBody extends SpeakeasyBase {
    /**
     * A currency code for the institution.
     */
    currencyCode: string;
    /**
     * A title for the institution.
     */
    title: string;
}
export declare class PostUsersIdInstitutionsRequest extends SpeakeasyBase {
    requestBody?: PostUsersIdInstitutionsRequestBody;
    /**
     * The unique identifier of the user
     */
    id: number;
}
export declare class PostUsersIdInstitutionsResponse extends SpeakeasyBase {
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
