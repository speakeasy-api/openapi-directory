import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CircuitsCircuitTerminationsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this circuit termination.
     */
    id: number;
}
export declare class CircuitsCircuitTerminationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
