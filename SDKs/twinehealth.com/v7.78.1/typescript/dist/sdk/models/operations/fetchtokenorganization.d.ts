import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchTokenOrganizationRequest extends SpeakeasyBase {
    /**
     * Token identifier
     */
    id: string;
}
export declare class FetchTokenOrganizationResponse extends SpeakeasyBase {
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
