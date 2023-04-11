import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVendorProjectsRequest extends SpeakeasyBase {
    /**
     * Return only projects that have been completed. When `true`, this makes `joined` true as well.
     */
    completed?: boolean;
    /**
     * Return only projects that this user has already joined
     */
    joined?: boolean;
    page?: number;
    perPage?: number;
}
export declare class GetVendorProjectsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * VendorNotFound - this is not a vendor user account
     */
    error?: shared.ErrorT;
    /**
     * Vendor project list
     */
    projectList?: shared.ProjectList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
