import { SpeakeasyBase } from "../../../internal/utils";
import { FlowEnumStatusEnum } from "./flowenumstatusenum";
/**
 * Created
 */
export declare class StudioV2Flow extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flow resource.
     */
    accountSid?: string;
    /**
     * Description of change made in the revision.
     */
    commitMessage?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * JSON representation of flow definition.
     */
    definition?: any;
    /**
     * List of error in the flow definition.
     */
    errors?: any[];
    /**
     * The string that you assigned to describe the Flow.
     */
    friendlyName?: string;
    /**
     * The URLs of the Flow's nested resources.
     */
    links?: Record<string, any>;
    /**
     * The latest revision number of the Flow's definition.
     */
    revision?: number;
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
     * Boolean if the flow definition is valid.
     */
    valid?: boolean;
    /**
     * List of warnings in the flow definition.
     */
    warnings?: any[];
    webhookUrl?: string;
}
