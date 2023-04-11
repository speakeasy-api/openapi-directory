import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTrainStatusAndProgress1Security extends SpeakeasyBase {
    bearerToken: string;
}
export declare class GetTrainStatusAndProgress1Request extends SpeakeasyBase {
    modelId: string;
}
export declare class GetTrainStatusAndProgress1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Training Status
     */
    trainResponse?: shared.TrainResponse;
}
