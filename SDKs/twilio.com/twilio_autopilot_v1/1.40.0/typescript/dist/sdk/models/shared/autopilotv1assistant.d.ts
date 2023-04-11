import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class AutopilotV1Assistant extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Assistant resource.
     */
    accountSid?: string;
    /**
     * Reserved.
     */
    callbackEvents?: string;
    /**
     * Reserved.
     */
    callbackUrl?: string;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * A string describing the state of the assistant.
     */
    developmentStage?: string;
    /**
     * The string that you assigned to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string;
    /**
     * Reserved.
     */
    latestModelBuildSid?: string;
    /**
     * A list of the URLs of the Assistant's related resources.
     */
    links?: Record<string, any>;
    /**
     * Whether queries should be logged and kept after training. Can be: `true` or `false` and defaults to `true`. If `true`, queries are stored for 30 days, and then deleted. If `false`, no queries are stored.
     */
    logQueries?: boolean;
    /**
     * Whether model needs to be rebuilt.
     */
    needsModelBuild?: boolean;
    /**
     * The unique string that we created to identify the Assistant resource.
     */
    sid?: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. It can be up to 64 characters long.
     */
    uniqueName?: string;
    /**
     * The absolute URL of the Assistant resource.
     */
    url?: string;
}
