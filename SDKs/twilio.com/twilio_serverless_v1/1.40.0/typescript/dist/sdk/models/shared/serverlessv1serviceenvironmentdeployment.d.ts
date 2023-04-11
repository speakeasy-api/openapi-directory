import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ServerlessV1ServiceEnvironmentDeployment extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Deployment resource.
     */
    accountSid?: string;
    /**
     * The SID of the Build for the deployment.
     */
    buildSid?: string;
    /**
     * The date and time in GMT when the Deployment resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the Deployment resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The SID of the Environment for the Deployment.
     */
    environmentSid?: string;
    /**
     * The SID of the Service that the Deployment resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Deployment resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Deployment resource.
     */
    url?: string;
}
