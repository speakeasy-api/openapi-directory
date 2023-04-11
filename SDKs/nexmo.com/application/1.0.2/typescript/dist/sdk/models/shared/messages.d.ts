import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MessagesWebhooksEndpointTypeEnum {
    InboundUrl = "inbound_url",
    StatusUrl = "status_url"
}
/**
 * The HTTP method used to send data to the `inbound_url` or `status_url`. Default is POST.
 */
export declare enum MessagesWebhooksHttpMethodEnum {
    Get = "GET",
    Post = "POST"
}
export declare class MessagesWebhooks extends SpeakeasyBase {
    /**
     * `inbound_url`: The URL where inbound messages are delivered. `status_url`: The URL where message status is delivered.
     */
    endpoint: string;
    endpointType: MessagesWebhooksEndpointTypeEnum;
    /**
     * The HTTP method used to send data to the `inbound_url` or `status_url`. Default is POST.
     */
    httpMethod: MessagesWebhooksHttpMethodEnum;
}
/**
 * The Nexmo product that you access with this application.
 */
export declare class Messages extends SpeakeasyBase {
    webhooks?: MessagesWebhooks[];
}
