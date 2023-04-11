import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchOrganizationRequest extends SpeakeasyBase {
    /**
     * Organization identifier
     */
    id: string;
}
export declare class FetchOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchOrganizationResponse?: shared.FetchOrganizationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
