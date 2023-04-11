import { SpeakeasyBase } from "../../../internal/utils";
import { FlowEnumStatusEnum } from "./flowenumstatusenum";
/**
 * OK
 */
export declare class StudioV1Flow extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flow resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the Flow.
     */
    friendlyName?: string;
    /**
     * The URLs of the Flow's nested resources.
     */
    links?: Record<string, any>;
    /**
     * The unique string that we created to identify the Flow resource.
     */
    sid?: string;
    status?: FlowEnumStatusEnum;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
    /**
     * The latest version number of the Flow's definition.
     */
    version?: number;
}
