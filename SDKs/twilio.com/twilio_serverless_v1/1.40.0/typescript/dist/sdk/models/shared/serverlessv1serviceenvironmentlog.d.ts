import { SpeakeasyBase } from "../../../internal/utils";
import { LogEnumLevelEnum } from "./logenumlevelenum";
/**
 * OK
 */
export declare class ServerlessV1ServiceEnvironmentLog extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Log resource.
     */
    accountSid?: string;
    /**
     * The SID of the build that corresponds to the log.
     */
    buildSid?: string;
    /**
     * The date and time in GMT when the Log resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The SID of the deployment that corresponds to the log.
     */
    deploymentSid?: string;
    /**
     * The SID of the environment in which the log occurred.
     */
    environmentSid?: string;
    /**
     * The SID of the function whose invocation produced the log.
     */
    functionSid?: string;
    level?: LogEnumLevelEnum;
    /**
     * The log message.
     */
    message?: string;
    /**
     * The SID of the request associated with the log.
     */
    requestSid?: string;
    /**
     * The SID of the Service that the Log resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Log resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Log resource.
     */
    url?: string;
}
