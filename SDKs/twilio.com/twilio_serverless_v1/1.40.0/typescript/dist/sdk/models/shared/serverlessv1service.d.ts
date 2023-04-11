import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ServerlessV1Service extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the Service resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the Service resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The base domain name for this Service, which is a combination of the unique name and a randomly generated string.
     */
    domainBase?: string;
    /**
     * The string that you assigned to describe the Service resource.
     */
    friendlyName?: string;
    /**
     * Whether to inject Account credentials into a function invocation context.
     */
    includeCredentials?: boolean;
    /**
     * The URLs of the Service's nested resources.
     */
    links?: Record<string, any>;
    /**
     * The unique string that we created to identify the Service resource.
     */
    sid?: string;
    /**
     * Whether the Service resource's properties and subresources can be edited via the UI.
     */
    uiEditable?: boolean;
    /**
     * A user-defined string that uniquely identifies the Service resource. It can be used in place of the Service resource's `sid` in the URL to address the Service resource.
     */
    uniqueName?: string;
    /**
     * The absolute URL of the Service resource.
     */
    url?: string;
}
