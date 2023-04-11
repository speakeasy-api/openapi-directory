import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ServerlessV1ServiceEnvironment extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Environment resource.
     */
    accountSid?: string;
    /**
     * The SID of the build deployed in the environment.
     */
    buildSid?: string;
    /**
     * The date and time in GMT when the Environment resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the Environment resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The domain name for all Functions and Assets deployed in the Environment, using the Service unique name, a randomly-generated Service suffix, and an optional Environment domain suffix.
     */
    domainName?: string;
    /**
     * A URL-friendly name that represents the environment and forms part of the domain name.
     */
    domainSuffix?: string;
    /**
     * The URLs of the Environment resource's nested resources.
     */
    links?: Record<string, any>;
    /**
     * The SID of the Service that the Environment resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Environment resource.
     */
    sid?: string;
    /**
     * A user-defined string that uniquely identifies the Environment resource.
     */
    uniqueName?: string;
    /**
     * The absolute URL of the Environment resource.
     */
    url?: string;
}
