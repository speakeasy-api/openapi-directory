import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateMediaProcessorServerList: readonly ["https://media.twilio.com"];
export declare class UpdateMediaProcessorSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateMediaProcessorUpdateMediaProcessorRequest extends SpeakeasyBase {
    status: shared.MediaProcessorEnumUpdateStatusEnum;
}
export declare class UpdateMediaProcessorRequest extends SpeakeasyBase {
    requestBody?: UpdateMediaProcessorUpdateMediaProcessorRequest;
    /**
     * The SID of the MediaProcessor resource to update.
     */
    sid: string;
}
export declare class UpdateMediaProcessorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    mediaV1MediaProcessor?: shared.MediaV1MediaProcessor;
}
