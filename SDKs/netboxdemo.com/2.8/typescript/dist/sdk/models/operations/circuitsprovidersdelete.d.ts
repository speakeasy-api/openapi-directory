import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CircuitsProvidersDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this provider.
     */
    id: number;
}
export declare class CircuitsProvidersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
