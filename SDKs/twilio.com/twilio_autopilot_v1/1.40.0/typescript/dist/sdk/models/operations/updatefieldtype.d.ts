import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateFieldTypeServerList: readonly ["https://autopilot.twilio.com"];
export declare class UpdateFieldTypeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateFieldTypeUpdateFieldTypeRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used as an alternative to the `sid` in the URL path to address the resource. The first 64 characters must be unique.
     */
    uniqueName?: string;
}
export declare class UpdateFieldTypeRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the to update.
     */
    assistantSid: string;
    requestBody?: UpdateFieldTypeUpdateFieldTypeRequest;
    /**
     * The Twilio-provided string that uniquely identifies the FieldType resource to update.
     */
    sid: string;
}
export declare class UpdateFieldTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    autopilotV1AssistantFieldType?: shared.AutopilotV1AssistantFieldType;
}
