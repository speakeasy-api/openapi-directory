import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProfileRequest extends SpeakeasyBase {
    /**
     * Number of results to return per page
     */
    length?: number;
    /**
     * Which field to use when ordering the results, prefix with `-` to invert ordering.
     *
     * @remarks
     *
     */
    ordering?: string;
    /**
     * Page number within the paginated result set
     */
    page?: number;
    /**
     * Search term
     */
    search?: string;
}
export declare class GetProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User object
     */
    user?: shared.User;
}
