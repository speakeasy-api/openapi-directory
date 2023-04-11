import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteInstitutionsIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the institution.
     */
    id: number;
    /**
     * The unique identifier of the institution to merge into.
     */
    mergeIntoInstitutionId?: number;
}
export declare class DeleteInstitutionsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
