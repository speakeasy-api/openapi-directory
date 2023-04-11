import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateFieldTypeServerList: readonly ["https://autopilot.twilio.com"];
export declare class CreateFieldTypeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateFieldTypeCreateFieldTypeRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the new resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string;
    /**
     * An application-defined string that uniquely identifies the new resource. It can be used as an alternative to the `sid` in the URL path to address the resource. The first 64 characters must be unique.
     */
    uniqueName: string;
}
export declare class CreateFieldTypeRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the new resource.
     */
    assistantSid: string;
    requestBody?: CreateFieldTypeCreateFieldTypeRequest;
}
export declare class CreateFieldTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    autopilotV1AssistantFieldType?: shared.AutopilotV1AssistantFieldType;
}
