import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionVersionEnumVisibilityEnum } from "./functionversionenumvisibilityenum";
export declare class ServerlessV1ServiceFunctionFunctionVersion extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    functionSid?: string;
    links?: Record<string, any>;
    path?: string;
    serviceSid?: string;
    sid?: string;
    url?: string;
    visibility?: FunctionVersionEnumVisibilityEnum;
}
