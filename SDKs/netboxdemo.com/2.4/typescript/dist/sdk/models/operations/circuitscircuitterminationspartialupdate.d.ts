import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CircuitsCircuitTerminationsPartialUpdateRequest extends SpeakeasyBase {
    writableCircuitTerminationInput: shared.WritableCircuitTerminationInput;
    /**
     * A unique integer value identifying this circuit termination.
     */
    id: number;
}
export declare class CircuitsCircuitTerminationsPartialUpdateResponse extends SpeakeasyBase {
    circuitTermination?: shared.CircuitTermination;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
