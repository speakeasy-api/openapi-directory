import { SpeakeasyBase } from "../../../internal/utils";
import { BuildStatusEnumStatusEnum } from "./buildstatusenumstatusenum";
/**
 * OK
 */
export declare class ServerlessV1ServiceBuildBuildStatus extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Build resource.
     */
    accountSid?: string;
    /**
     * The SID of the Service that the Build resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Build resource.
     */
    sid?: string;
    status?: BuildStatusEnumStatusEnum;
    /**
     * The absolute URL of the Build Status resource.
     */
    url?: string;
}
