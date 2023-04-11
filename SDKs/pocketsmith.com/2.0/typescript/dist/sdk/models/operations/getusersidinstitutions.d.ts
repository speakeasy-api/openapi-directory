import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdInstitutionsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the user
     */
    id: number;
}
export declare class GetUsersIdInstitutionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    /**
     * Success
     */
    institutions?: shared.Institution[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
