import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetEventsRequest extends SpeakeasyBase {
    /**
     * Start of time range for audit events. DateTime in ISO-8601 format.
     */
    dateFrom?: string;
    /**
     * End of time range for audit events. DateTime in ISO-8601 format.
     */
    dateTo?: string;
    /**
     * Filter results by this event type.
     */
    eventType?: shared.EventTypesEnum;
    /**
     * Page number starting with page 1.
     */
    page?: string;
    /**
     * Return only audit events where the JSON object contains this search text. Must be legal text for a JSON attribute value, that is quotes and braces must be escaped.
     */
    searchText?: string;
    /**
     * Number of elements per page.
     */
    size?: number;
}
export declare class GetEventsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    auditResp?: shared.AuditResp;
    contentType: string;
    /**
     * Forbidden
     */
    errorForbidden?: shared.ErrorForbidden;
    /**
     * Not Found
     */
    errorNotFound?: shared.ErrorNotFound;
    /**
     * Unauthorized
     */
    errorUnauthorized?: shared.ErrorUnauthorized;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
