import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic authentication with username and password. - Authentication with additional authentication headers. More information could be found at: https://cloud.google.com/dialogflow/docs/fulfillment-configure.
 */
export declare class GoogleCloudDialogflowV2FulfillmentGenericWebService extends SpeakeasyBase {
    /**
     * Optional. Indicates if generic web service is created through Cloud Functions integration. Defaults to false. is_cloud_function is deprecated. Cloud functions can be configured by its uri as a regular web service now.
     */
    isCloudFunction?: boolean;
    /**
     * Optional. The password for HTTP Basic authentication.
     */
    password?: string;
    /**
     * Optional. The HTTP request headers to send together with fulfillment requests.
     */
    requestHeaders?: Record<string, string>;
    /**
     * Required. The fulfillment URI for receiving POST requests. It must use https protocol.
     */
    uri?: string;
    /**
     * Optional. The user name for HTTP Basic authentication.
     */
    username?: string;
}
