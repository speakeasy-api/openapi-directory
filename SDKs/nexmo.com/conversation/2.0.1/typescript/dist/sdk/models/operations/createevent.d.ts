import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateEventPathParams extends SpeakeasyBase {
    conversationId: string;
}
/**
 * Create New Event Request Payload Object
**/
export declare class CreateEventRequestBody extends SpeakeasyBase {
    body?: Record<string, any>;
    from: string;
    to?: string;
    type: string;
}
/**
 * Create New Event Response Payload Object
**/
export declare class CreateEvent201ApplicationJson extends SpeakeasyBase {
    href?: string;
    id?: string;
    timestamp?: string;
}
export declare class CreateEventRequest extends SpeakeasyBase {
    pathParams: CreateEventPathParams;
    request?: CreateEventRequestBody;
}
export declare class CreateEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createEvent201ApplicationJSONObject?: CreateEvent201ApplicationJson;
}
