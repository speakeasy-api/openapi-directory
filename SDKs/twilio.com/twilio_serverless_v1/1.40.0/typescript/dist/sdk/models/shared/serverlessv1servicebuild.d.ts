import { SpeakeasyBase } from "../../../internal/utils";
import { BuildEnumRuntimeEnum } from "./buildenumruntimeenum";
import { BuildEnumStatusEnum } from "./buildenumstatusenum";
/**
 * Created
 */
export declare class ServerlessV1ServiceBuild extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Build resource.
     */
    accountSid?: string;
    /**
     * The list of Asset Version resource SIDs that are included in the Build.
     */
    assetVersions?: any[];
    /**
     * The date and time in GMT when the Build resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the Build resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * A list of objects that describe the Dependencies included in the Build. Each object contains the `name` and `version` of the dependency.
     */
    dependencies?: any[];
    /**
     * The list of Function Version resource SIDs that are included in the Build.
     */
    functionVersions?: any[];
    links?: Record<string, any>;
    runtime?: BuildEnumRuntimeEnum;
    /**
     * The SID of the Service that the Build resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Build resource.
     */
    sid?: string;
    status?: BuildEnumStatusEnum;
    /**
     * The absolute URL of the Build resource.
     */
    url?: string;
}
