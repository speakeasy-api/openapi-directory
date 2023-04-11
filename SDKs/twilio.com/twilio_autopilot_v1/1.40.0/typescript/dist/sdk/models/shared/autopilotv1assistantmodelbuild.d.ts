import { SpeakeasyBase } from "../../../internal/utils";
import { ModelBuildEnumStatusEnum } from "./modelbuildenumstatusenum";
/**
 * Created
 */
export declare class AutopilotV1AssistantModelBuild extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ModelBuild resource.
     */
    accountSid?: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
     */
    assistantSid?: string;
    /**
     * The time in seconds it took to build the model.
     */
    buildDuration?: number;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * If the `status` for the model build is `failed`, this value is a code to more information about the failure. This value will be null for all other statuses. See [error code dictionary](https://www.twilio.com/docs/api/errors) for a description of the error.
     */
    errorCode?: number;
    /**
     * The unique string that we created to identify the ModelBuild resource.
     */
    sid?: string;
    status?: ModelBuildEnumStatusEnum;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used as an alternative to the `sid` in the URL path to address the resource.
     */
    uniqueName?: string;
    /**
     * The absolute URL of the ModelBuild resource.
     */
    url?: string;
}
