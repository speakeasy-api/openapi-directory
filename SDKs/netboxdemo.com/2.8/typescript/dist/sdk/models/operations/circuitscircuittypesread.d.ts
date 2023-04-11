import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CircuitsCircuitTypesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this circuit type.
     */
    id: number;
}
export declare class CircuitsCircuitTypesReadResponse extends SpeakeasyBase {
    circuitType?: shared.CircuitType;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
