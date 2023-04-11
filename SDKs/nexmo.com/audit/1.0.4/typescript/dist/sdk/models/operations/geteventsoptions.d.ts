import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventsOptionsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    auditEventTypesResp?: shared.AuditEventTypesResp;
    contentType: string;
    /**
     * Forbidden
     */
    errorForbidden?: shared.ErrorForbidden;
    /**
     * Unauthorized
     */
    errorUnauthorized?: shared.ErrorUnauthorized;
    /**
     * No Content
     */
    noContent?: shared.NoContent;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
