import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInstitutionsIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the institution.
     */
    id: number;
}
export declare class GetInstitutionsIdResponse extends SpeakeasyBase {
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
