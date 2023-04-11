import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTrainStatusAndProgressSecurity extends SpeakeasyBase {
    bearerToken: string;
}
export declare class GetTrainStatusAndProgressRequest extends SpeakeasyBase {
    /**
     * Model Id
     */
    modelId: string;
}
export declare class GetTrainStatusAndProgressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Training Status
     */
    trainResponse?: shared.TrainResponse;
}
