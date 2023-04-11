import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CircuitsProvidersGraphsRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this provider.
     */
    id: number;
}
export declare class CircuitsProvidersGraphsResponse extends SpeakeasyBase {
    contentType: string;
    provider?: shared.Provider;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
