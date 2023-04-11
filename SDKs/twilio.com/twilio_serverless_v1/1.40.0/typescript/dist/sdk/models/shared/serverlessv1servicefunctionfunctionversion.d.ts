import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionVersionEnumVisibilityEnum } from "./functionversionenumvisibilityenum";
/**
 * OK
 */
export declare class ServerlessV1ServiceFunctionFunctionVersion extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Function Version resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the Function Version resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The SID of the Function resource that is the parent of the Function Version resource.
     */
    functionSid?: string;
    links?: Record<string, any>;
    /**
     * The URL-friendly string by which the Function Version resource can be referenced. It can be a maximum of 255 characters. All paths begin with a forward slash ('/'). If a Function Version creation request is submitted with a path not containing a leading slash, the path will automatically be prepended with one.
     */
    path?: string;
    /**
     * The SID of the Service that the Function Version resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Function Version resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Function Version resource.
     */
    url?: string;
    visibility?: FunctionVersionEnumVisibilityEnum;
}
