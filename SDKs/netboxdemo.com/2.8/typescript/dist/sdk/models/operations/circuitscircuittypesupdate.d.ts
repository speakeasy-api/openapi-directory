import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CircuitsCircuitTypesUpdateRequest extends SpeakeasyBase {
    circuitTypeInput: shared.CircuitTypeInput;
    /**
     * A unique integer value identifying this circuit type.
     */
    id: number;
}
export declare class CircuitsCircuitTypesUpdateResponse extends SpeakeasyBase {
    circuitType?: shared.CircuitType;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
