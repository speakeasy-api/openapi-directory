import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Function Version resource.
     */
    accountSid?: string;
    /**
     * The content of the Function Version resource.
     */
    content?: string;
    /**
     * The SID of the Function that is the parent of the Function Version.
     */
    functionSid?: string;
    /**
     * The SID of the Service that the Function Version resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Function Version resource.
     */
    sid?: string;
    url?: string;
}
