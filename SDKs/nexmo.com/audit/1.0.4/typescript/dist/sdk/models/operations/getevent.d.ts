import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetEventRequest extends SpeakeasyBase {
    /**
     * The UUID of the audit event to retrieve
     */
    id: string;
}
export declare class GetEventResponse extends SpeakeasyBase {
    /**
     * OK
     */
    auditEvent?: shared.AuditEvent;
    contentType: string;
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
