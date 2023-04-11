import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFeaturesFeatureIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier for a feature
     */
    featureId: number;
}
export declare class GetFeaturesFeatureIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
