import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CircuitsProvidersReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this provider.
     */
    id: number;
}
export declare class CircuitsProvidersReadResponse extends SpeakeasyBase {
    contentType: string;
    provider?: shared.Provider;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
